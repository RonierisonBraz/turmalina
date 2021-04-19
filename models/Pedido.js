module.exports = (sequelize, DataTypes) => {

    const Pedido = sequelize.define(
        'Pedido', {
            data: DataTypes.DATE, 
            valor_total: DataTypes.DOUBLE,
            status: DataTypes.STRING,
            pagamentos_id: DataTypes.INTEGER,
            usuarios_id: DataTypes.INTEGER
        }, {
            tableName: 'pedidos',
            timestamps: false
        }
    
        );

        Pedido.associate = (models) => {

            //Relação N:1 - pedidos/pagamento
            Pedido.belongsTo (models.Pedido, {as: "pagamentos", foreignKey:"pagamentos_id"});
            //Relação 1:N - pedidos/usuario
            Pedido.hasMany (models.Pedido, {as:  "usuarios", foreignKey: "usuarios_id"});

        }
        return Pedido;
    
    }

