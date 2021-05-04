const { Pedido, sequelize } = require('../models');

const pedidosController = {
    index: async (req, res) => {
        let pedidos = await Pedido.findAll();
        return res.json(pedidos);
    },
    create: async (req, res) => {
        let { data_pedido, valor_total, pagamentos_id, usuarios_id, status_pedido_id } = req.body;
        let novoPedido = await Pedido.create(
            { data_pedido: new Date(data_pedido), valor_total, pagamentos_id, usuarios_id, status_pedido_id: 1 }
        );
        return res.render('perfil-pedido', novoPedido);
    },
    update: async (req, res) => {
        let { id } = req.params;
        let { valor_total, status_pedido_id } = req.body;

        let atualizarPedido = await Pedido.update(
            {
                valor_total, status_pedido_id
            }, {
            where: { id }
        });
        return res.send(atualizarPedido);
    },
    delete: async (req, res) => {
        let { id } = req.params;

        const deletarPedido = await Pedido.destroy({
            where: { id }
        });
        return res.json(deletarPedido);
    },
    incluirItem: async (req, res) => {

    }
}

module.exports = pedidosController;