module.exports = (sequelize, DataTypes) => {

    const Pagamento = sequelize.define(
        'Pagamento', {
        parcelas: DataTypes.INTEGER,
        data_pagamento: DataTypes.DATE,
        tipos_pagamento_id: DataTypes.INTEGER
    }, {
        tableName: 'pagamentos',
        timestamps: false
    });

    //fiz modificação
    Pagamento.associate = (models) => {
        Pagamento.belongsTo(models.Pedido, { as: "pagamento", foreignKey: "pagamentos_id"});
        //relação 1:1
        Pagamento.hasOne(models.TiposPagamento, {as: "tipos_pagamento", foreignKey: "tipos_pagamento_id"})
    }

    return Pagamento;

}