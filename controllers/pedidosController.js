const { Pedido, sequelize } = require('../models');
const { Op } = require('sequelize');

const pedidosController = {

    index: async (req, res) => {
        let pedidos = await Pedido.findAll();
        return res.json(pedidos);
    }, create: async (req, res) => {
        let {data, valor_total, status, pagamentos_id, usuarios_id} = req.body;
        let novoPedido = await Pedido.create(
            {data, valor_total, status, pagamentos_id, usuarios_id}
        );
        return res.json(novoPedido);
    }, update: async (req, res) => {
        let {id} = req.params;
        let {data, valor_total, status} = req.body;

        let atualizarPedido = await Pedido.update(
            {data, valor_total, status
            }, {
                where: {id}
            });
        return res.send(atualizarPedido);
    }, delete: async (req, res) => {
        let {id} = req.params;

        const deletarPedido = await Pedido.destroy ({
            where: {id}
        });
        return res.json(deletarPedido);
    }
}

module.exports = pedidosController;