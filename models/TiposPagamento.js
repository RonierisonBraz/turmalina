module.exports = (sequelize, DataTypes) => {

<<<<<<< HEAD
=======

>>>>>>> 0cbee40dfe3e1a374494816ee0ba597df6bd8475
    const TiposPagamento = sequelize.define(
        'TiposPagamento', {
        descricao: DataTypes.STRING

    }, {
        tableName: 'tipos_pagamento',
        timestamps: false
    });
    TiposPagamento.associate = (models) => {
        TiposPagamento.belongsTo(models.Pagamento, { as: "pagamentos", foreignKey: "tipos_pagamento_id" });
    }
    return TiposPagamento;
<<<<<<< HEAD
}
=======
}   
>>>>>>> 0cbee40dfe3e1a374494816ee0ba597df6bd8475
