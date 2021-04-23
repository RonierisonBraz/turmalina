module.exports = (sequelize, DataTypes) => {
    
    const Produto = sequelize.define(
        "Produto", {
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            valor: DataTypes.STRING,
            quantidade: DataTypes.INTEGER,
            categorias_id: DataTypes.INTEGER
            },{
                tableName: "produtos",
                timestamps: false
            }
        );
    Produto.associate = (models) => {
        Produto.hasOne(models.Categoria, { as: "categoria", foreignKey: "categorias_id" });
    }

        return Produto;   
}