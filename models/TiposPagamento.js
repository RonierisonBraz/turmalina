module.exports = (sequelize, DataTypes) => {

    const TiposPagamento = sequelize.define(
        'TiposPagamento', {
        descricao: DataTypes.STRING
    }, {
        tableName: 'tipos_pagamento',
        timestamps: false
    });
    TiposPagamento.associate = (models) => {
        TiposPagamento.hasMany(models.Pagamento, { as: "pagamentos", foreignKey: "tipos_pagamento_id" });
    }
    return TiposPagamento;
}