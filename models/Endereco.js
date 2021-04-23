module.exports = (sequelize, DataTypes) => {

    const Endereco = sequelize.define(
        'Endereco', {
            logradouro: DataTypes.STRING,
            numero: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            cep: DataTypes.STRING,
            complemento: DataTypes.STRING
        }, {
            tableName: "enderecos",
            timestamps: false
        }
    );

    Endereco.associate = (models) => {
     //N:1 Muitos usuarios para um endereço
     Endereco.belongsTo(models.Usuario, {as:"usuarios", foreignKey:"usuarios_id"});
    }
    return Endereco;
}