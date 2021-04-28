module.exports = (sequelize, DataTypes) => {

    const Pagamento = sequelize.define(
        'Pagamento', {
        parcelas: DataTypes.INTEGER,
        data: DataTypes.DATE,
        tipos_pagamento_id: DataTypes.INTEGER
    }, {
        tableName: 'pagamentos',
        timestamps: false
    });

    //fiz modificação
    Pagamento.associate = (models) => {
        Pagamento.belongsTo(models.Pedido, { as: "pagamento", foreignKey: "pagamentos_id"});
    }

    return Pagamento;

}