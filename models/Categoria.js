module.exports = (sequelize, DataTypes) => {
    
    const Categoria = sequelize.define(
        "Categoria", {
            nome: "String",        
            },{
                tableName: "categoria",
                timestamps: false
            }
        );
        return Categoria;   
};