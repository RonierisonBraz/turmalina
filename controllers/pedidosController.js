const { Pedido, sequelize } = require('../models');
const { Op } = require('sequelize');

const pedidosController = {
    index: async (req, res) => {
     //   let pedidos = await Pedido.findAll();
        return res.render('perfil-pedido');
    }, 
    create: async (req, res) => {
        let {data_pedido, valor_total, pagamentos_id, usuarios_id, status_pedido_id} = req.body;
        let novoPedido = await Pedido.create(
            {data_pedido: new Date(data_pedido), valor_total, pagamentos_id, usuarios_id, status_pedido_id}
        );
        return res.json(novoPedido);
    }, 
    pedidosAguardandoPagamento: async (req, res) => {
        const  pedidosEmAndamento  = await Pedido.findAll({
            where: { status_pedido_id : 1} //funcionando
        });
       
        return res.json(pedidosEmAndamento);
    },
    update: async (req, res) => {
        let {id} = req.params;
        let {valor_total, status_pedido_id} = req.body;

        let atualizarPedido = await Pedido.update(
            {valor_total, status_pedido_id
            }, {
                where: {id}
            });
        return res.send(atualizarPedido);

   }, cancelarPedido: async (req, res) => {
        let {id} = req.params;
        let {status_pedido_id} = req.body;
        let atualizarStatus = await Pedido.update(
            {status_pedido_id} , {
                where: {id}
            })
        
            return res.send(atualizarStatus);
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