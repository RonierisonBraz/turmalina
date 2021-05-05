const { Pedido, Pagamento, sequelize } = require('../models');

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
    finalizarPagamento: async (req, res) => {
        let { parcelas, tipos_pagamento_id } = req.body;
        let novoPagamento = await Pagamento.create(
            { parcelas, data_pagamento: Date.now(), tipos_pagamento_id }
        );
        return res.json(novoPagamento);
    },
    sacola: async (req, res) => {
        const pedidosEmAndamento = await Pedido.findAll({
            where: { status_pedido_id: 1 } //funcionando
        });

        return res.json(pedidosEmAndamento);
    },
    atualizarPedido: async (req, res) => {
        let { id } = req.params;
        let { valor_total, status_pedido_id } = req.body;

        let atualizarPedido = await Pedido.update({
            valor_total, status_pedido_id
        }, {
            where: { id }
        });
        return res.send(atualizarPedido);
    },
    cancelarPedido: async (req, res) => {
        const { id } = req.params;
        const { status_pedido_id } = req.body;

        const atualizarStatus = await Pedido.update(
            { status_pedido_id }, {
            where: { id }
        });

        return res.render('perfil', { Pedidos: atualizarStatus });
        //localhost:3000/pedidos/cancelar/2
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