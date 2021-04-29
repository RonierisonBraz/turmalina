module.exports = (sequelize, DataTypes) => {

    const Pedido = sequelize.define(
        'Pedido', {
        data_pedido: DataTypes.DATE,
        valor_total: DataTypes.DOUBLE,
        pagamentos_id: DataTypes.INTEGER,
        usuarios_id: DataTypes.INTEGER,
        status_pedido_id: DataTypes.INTEGER
    }, {
        tableName: 'pedidos',
        timestamps: false
    });

    Pedido.associate = (models) => {
        //Relação 1:1 - pedidos/pagamento
        Pedido.hasOne(models.Pagamento, { as: "pagamentos", foreignKey: "pagamentos_id" });

        //Relação 1:N - pedidos/usuario
        Pedido.belongsTo(models.Usuario, { as: "usuarios", foreignKey: "usuarios_id" });

        //Relação 1:1 - pedido/status-pedido
        Pedido.belongsTo(models.StatusPedido, { as: "status_pedido", foreignKey: "status_pedido_id" });

    }
    return Pedido;

}