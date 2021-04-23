const {Endereco, sequelize} = require('../models');


const enderecoController = {
    index: async (request, response) => {
        let enderecos = await Endereco.findAll();

        return response.json(enderecos);
    }
}

module.exports = enderecoController;