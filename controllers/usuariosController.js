const { Usuario, sequelize } = require('../models/');

const usuariosController = {

    index: async (request,response) => {
        const usuarios = await Usuario.findAll();
        return response.json({listaUsuarios: usuarios});
    },
    create: async (request, response) => {
        const {nome, telefone, email, senha, cpf, enderecos_id} = request.body;

        const usuarioAdicionar = await Usuario.create({
            nome,
            telefone,
            email,
            senha,
            cpf,
            enderecos_id
        });
        return response.json(usuarioAdicionar);
    },
    update: async (request, response) => {
        const { id } = request.params;
        const { nome, telefone, email, senha, cpf, enderecos_id } = request.body;

        const usuarioAtualizar = await Usuario.update({
            nome, 
            telefone,
            email, 
            senha,
            cpf,
            enderecos_id
        }, {
            where: { id }
        })

        return response.send(usuarioAtualizar);
    },
    delete: async (request, response) => {
        const { id } = request.params;

        const usuarioRemover = await Usuario.destroy({
            where: {id}
        });

        return response.json(usuarioRemover);
        
    }
}
module.exports = usuariosController;