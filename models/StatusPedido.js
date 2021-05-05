module.exports = (sequelize, DataTypes) => {

    const StatusPedido = sequelize.define(
        'StatusPedido', {
        descricao: DataTypes.STRING
    }, {
        tableName: 'status_pedido',
        timestamps: false
    });

    StatusPedido.associate = (models) => {
        //Relação 1:1 - pedido/status-pedido
        StatusPedido.hasMany(models.Pedido, { as: "status_pedido", foreignKey: "status_pedido_id" });
    }

    return StatusPedido;
}

