module.exports = (sequelize, DataTypes) => {

    const StatusPedido = sequelize.define(
        'StatusPedido', {
            descricao: DataTypes.STRING
        }, {
            tableName: 'status_pedidos',
            timestamps: false
        });

        return StatusPedido;
    
    }

