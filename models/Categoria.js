module.exports = (sequelize, DataTypes) => {
    
    const Categoria = sequelize.define(
        "Categoria", {
            nome: DataTypes.STRING,        
            },{
                tableName: "categorias",
                timestamps: false
            }
        );

Categoria.associate = (models) => {
    Categoria.hasMany(models.Produto, { as: "produto", foreignKey: "categorias_id" });   
    }

return Categoria;   
}