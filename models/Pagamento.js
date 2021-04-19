module.exports = (sequelize, DataTypes) => {

    const Pagamento = sequelize.define(
    'Pagamento', { 
        parcelas: DataTypes.INTEGER,
        data: DataTypes.DATE,
        tipos_pagamento_id: DataTypes.INTEGER
    },{
        tableName: 'pagamentos',
        timestamps: false
    });

    Pagamento.associate = (models) => {

        Pagamento.hasMany(models.Pagamento, {as: "tiposPagamento", foreignKey:"tipos_pagamento_id"});
    }
    return Pagamento;

    }