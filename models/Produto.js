module.exports = (sequelize, DataTypes) => {
    
    const Produto = sequelize.define(
        "Produto", {
            nome: "String",
            descricao: "String",
            valor: "double",
            quantidade: "int",
            categoria_id: "int"            
            },{
                tableName: "produtos",
                timestamps: false
            }
        );
        return Produto;   
};