module.exports = (sequelize, DataTypes) => {
    
    const Categoria = sequelize.define(
        "Categoria", {
            nome: DataTypes.STRING,        
            },{
                tableName: "categoria",
                timestamps: false
            }
        );
        return Categoria;   
};