module.exports = (sequelize, DataTypes) => {

    const Produto = sequelize.define(
        "Produto", {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        valor: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        categorias_id: DataTypes.INTEGER,
        img : DataTypes.STRING  // NO MEU BANCO (AMANDA) TEM IMAGEM DO PRODUTO
    }, {
        tableName: "produtos",
        timestamps: false
    }
    );
    Produto.associate = (models) => {
        Produto.belongsTo(models.Categoria, { as: "categoria", foreignKey: "categorias_id" });
        Produto.belongsTo(models.ItensPedido, {as:"itensPedido", foreignKey:"id"});
    }

    return Produto;
}