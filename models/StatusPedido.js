module.exports = (sequelize, DataTypes) => {

    const Pedido = sequelize.define(
        'Pedido', {
            descricao: DataTypes.STRING
        }, {
            tableName: 'pedidos',
            timestamps: false
        });

        return Pedido;
    
    }

