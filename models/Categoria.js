module.exports = (sequelize, DataTypes) => {
    
    const Categoria = sequelize.define(
        "Categoria", {
            nome: DataTypes.STRING,        
            },{
                tableName: "categorias",
                timestamps: false
            }
        );
        return Categoria;   
};