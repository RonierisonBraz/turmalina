
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
    )

    return Endereco;

}