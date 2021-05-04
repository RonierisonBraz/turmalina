const { Pedido, Pagamento, sequelize } = require('../models');
const { Op } = require('sequelize');
const { request } = require('express');

const pedidosController = {
    index: async (req, res) => {
     //   let pedidos = await Pedido.findAll();
        return res.render('perfil-pedido');
    }, 
    create: async (req, res) => {
        let {valor_total, pagamentos_id, usuarios_id, status_pedido_id} = req.body;
        let novoPedido = await Pedido.create(
            {data_pedido: Date.now(), valor_total, pagamentos_id, usuarios_id, status_pedido_id}
        );
        return res.json(novoPedido);
    },
    finalizarPagamento: async (req, res) => {
        let { parcelas, tipos_pagamento_id} = req.body;
        let novoPagamento = await Pagamento.create(
            {parcelas, data_pagamento: Date.now(), tipos_pagamento_id}
        );
        return res.json(novoPagamento);
    },  
    sacola: async (req, res) => {
        const { id } = req.params;

        const pedidosEmAndamento = await Pedido.findAll({
            where: {
                status_pedido_id: 1,
                usuarios_id: id
            } //funcionando
        });

        // const itens = await ItensPedido.findAll({
        //     where: { pedidos_id: pedidosEmAndamento }
        // })

        return res.render('sacola', { Pedido: pedidosEmAndamento });
    },
    update: async (req, res) => {
        let {id} = req.params;
        let {valor_total, status_pedido_id} = req.body;

        let atualizarPedido = await Pedido.update(
            {valor_total, status_pedido_id
            }, {
                where: {id}
            });
        // return res.send(atualizarPedido);
        return res.render("perfil-pedido");

   },
    cancelarPedido: async (req, res) => {
        const {id} = req.params;
        const {status_pedido_id} = req.body;
        const atualizarStatus = await Pedido.update(
            {status_pedido_id} , {
                where: {id}
            })
        
            // return res.send(atualizarStatus);
            return res.render('perfil-pedido',{Pedidos: atualizarStatus});
        //localhost:3000/pedidos/cancelar/2

    },   delete: async (req, res) => {
        let {id} = req.params;

        const deletarPedido = await Pedido.destroy ({
            where: {id}
        });
        return res.json(deletarPedido);
    }
}

module.exports = pedidosController;