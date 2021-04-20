module.exports = (sequelize, DataTypes) => {
    
    const Produto = sequelize.define(
        "Produto", {
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            valor: DataTypes.STRING,
            quantidade: DataTypes.INTEGER,
            categoria_id: DataTypes.INTEGER            
            },{
                tableName: "produtos",
                timestamps: false
            }
        );
    Produto.associate = (models) => {
        Produto.belongsTo(models.Categoria, { as: "categoria", foreignKey: "categoria_id" });
    }

        return Produto;   
}