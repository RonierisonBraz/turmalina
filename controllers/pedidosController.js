const { Pedido, Pagamento, ItensPedido , Produto, sequelize } = require('../models');
// const { Op } = require('sequelize');
// const { request } = require('express');

const pedidosController = {
    index: async (req, res) => {
        return res.render('perfil');
    },
    fazerPedido: async (req, res) => {
        let { data_pedido, valor_total, pagamentos_id, usuarios_id } = req.body;
        let novoPedido = await Pedido.create(
            { data_pedido: new Date(data_pedido), valor_total, pagamentos_id, usuarios_id, status_pedido_id: 1 }
        );
        return res.render('sacola', {novoPedido: novoPedido});
    },
    pagamento :  async (req, res) => { 
        return res.render('pagamento');
    },
    finalizarPagamento: async (req, res) => {
        let { parcelas } = req.body;
        let novoPagamento = await Pagamento.create(
            { parcelas, data_pagamento: Date.now(), tipos_pagamento_id: 2}
        );
        console.log("ta entrando no metodo");
        return res.render('pagamento' ,novoPagamento);
    },
    sacola: async (req, res) => {
        const {id} = req.session.usuarioLogado;

        const pedidoEmAndamento = await Pedido.findOne({
            where: {
                status_pedido_id: 1,
                usuarios_id: id
            } //funcionando
        });

        const itens = await ItensPedido.findAll({
            include: ['produto'],
            where: { pedidos_id: pedidoEmAndamento.id }
        });

        // console.log(itens[1].produto.nome)

        return res.render('sacola', { Pedido: pedidoEmAndamento, itens});
    },
    produtosSacola: async (req, res) => {
        const {valor, quantidade, produtos_id} = req.body
        const {id} = req.session.usuarioLogado;
        const valorTotal = valor * quantidade
        const pedidoEmAndamento = await Pedido.findOne({
            where: {
                status_pedido_id: 1,
                usuarios_id: id
            } //funcionando
        });      
        if(pedidoEmAndamento){
            // tem pedido em andamento 
            //adcionar o item na tabela de itens_pedidos com o id do pedido e do produto click
            // busca nos ItensPedido se tem um pedidos_id: pedidoEmAndamento.id que tenha um produtos_id: produtos_id.

            // const itemExiste = await ItensPedido.findAll({
            //     where: {
            //         pedidos_id: pedidoEmAndamento.id,
            //         produtos_id: produtos_id
            //     }
            // }) 

            // if (!itemExiste) {

                const addItemPedidoAndamento = await ItensPedido.create({
                    valor: valor,
                    quantidade: quantidade,
                    valor_total: valorTotal,
                    produtos_id: produtos_id,
                    pedidos_id: pedidoEmAndamento.id
                })
            // }

            // if(itemExiste) {
            //     alert("Produto está na sacola!")
            // }

        } else {
            // não tem pedido em andamento e
            //Criar um id na tabela de Pedidos com o status em andamento 
            // adcionar o item na tabela de itens_pedidos com o id do pedido e do produto click
            //-----------------criando pedido em andamento na tabale
            let { valor_total, pagamentos_id } = req.body;
            let novoPedido = await Pedido.create(
                { data_pedido: Date.now(), valor_total:0, pagamentos_id:1, usuarios_id:id, status_pedido_id:1 }
            );  
            //---------------------fim
            //
            const pedido = await ItensPedido.create( {
                valor:valor,
                quantidade:quantidade,
                valor_total:valorTotal,
                produtos_id: produtos_id, 
                pedidos_id: novoPedido.id
            } )
        } 
        return res.json({mensagem:"sucesso"});
    },
    atualizaItensSacola: async (req, res) => {
        const {valor, quantidade, produtos_id, pedidos_id} = req.body
        // const {id} = req.session.usuarioLogado;

        const valorTotal = valor * quantidade;

        const pedido = await ItensPedido.update( {
            quantidade: quantidade,
            valor_total: valorTotal,
        },
        {
            where : {
                produtos_id,
                pedidos_id
            }
        });

        return res.json(pedido);
    },
    atualizaValorTotalPedidos: async (req, res) => {
        const {id} = req.params;
        let { quantidade, pedido_ } = req.body;
        let total = 0;
        let i;

        console.log("TA PEGANDO");

        const encontrarPedido = await Pedido.findOne ({
            where : {
                status_pedido_id : 1,
                usuarios_id: id
            }
        });
        const valorItens = await ItensPedido.findAll(
            // {
            //     valorTotalPedido : ItensPedido.valor_total
            // },
            {
                where : { pedidos_id: encontrarPedido.id }
            }
        );
        for(i=0; i< valorItens.length; i++) {
            total = total + (quantidade * valorItens[i].valor_total);
        }
        // ELE NAO TA PEGANDO O VALOR DE TOTAL, O ERRO EH valor_total = ?
        const atualizaValorTotal = await Pedido.update(
            {
                valor_total : total
            },            
            {
                where: {
                status_pedido_id : 1,
                usuarios_id: id }
            });

        return res.render(atualizaValorTotal);
    },
    atualizarPedido: async (req, res) => {
        const {id} = req.session.usuarioLogado;
         const {idpedido} = req.body;
        let valorTotal = 0;
        //const id =6
        

        // const encontrarPedido = await Pedido.findOne ({
        //     where : {
        //         status_pedido_id : 1,
        //         usuarios_id: id
        //     }
        // });
        const itens = await ItensPedido.findAll(
            {
                where : { pedidos_id: idpedido }
            }
        );

        for(let i=0; i < itens.length; i++) {
           console.log(itens[i].valor_total)
            valorTotal = valorTotal + itens[i].valor_total;
        }
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(valorTotal)
        const atualizarPedido = await Pedido.update({
            valor_total : valorTotal
        }, {
            where: { 
                usuarios_id: id,
                status_pedido_id : 1
            }
        });
        return res.json(atualizarPedido);
    },
    
    cancelarPedido: async (req, res) => {
        const {id} = request.session.usuarioLogado;
        const { status_pedido_id } = req.body;

        const atualizarStatus = await Pedido.update(
            { status_pedido_id }, {
            where: { id }
        });

        return res.render('perfil', { Pedidos: atualizarStatus });
        //localhost:3000/pedidos/cancelar/2
    },
    limparSacola: async (req, res) => {
        // const {id} = req.session.usuarioLogado;
        const {id} = req.params;


        const pedidoEmAndamento = await Pedido.findOne({
            where: {
                status_pedido_id: 1,
                usuarios_id: id
            } //funcionando
        });

        const limpandoSacola = await Pedido.update(
            {  status_pedido_id : 2  }, {
                where : { id: pedidoEmAndamento.id }
        })

        return res.json({mensagem:"sucesso"});
    },
    delete: async (req, res) => {
        let { id } = req.params;

        const deletarPedido = await Pedido.destroy({
            where: { id }
        });

        return res.json(deletarPedido);
    }

}

module.exports = pedidosController;