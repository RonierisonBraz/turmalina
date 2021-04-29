module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define(
        "Usuario",{
            nome: DataTypes.STRING,
            telefone: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            cpf: DataTypes.STRING,
            enderecos_id: DataTypes.STRING
        }, {
            tableName: "usuarios",
            timestamps:false
        }
    );

    Usuario.associate = (models) => {
         //N:1 Um usuario para muitos pedidos
        Usuario.belongsTo(models.Endereco, {as:"enderecos", foreignKey:"enderecos_id"});

        /*
        //1:N Um usuario para muitos pedidos
        Usuario.hasMany(models.Pedidos, {as:"pedidos",foreignKey:usuarios_id});
        */
    };

    return Usuario;
}