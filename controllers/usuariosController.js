// const { where } = require('sequelize/types');
const { Usuario, Endereco, sequelize } = require('../models');

const usuariosController = {

    perfil: async (request, response) => {
        // const usuarios = await Usuario.findAll();
        // return response.json({listaUsuarios: usuarios});
        return response.render('perfil');
    },
    listarUsuarios: async (request, response) => {
        let listarUsuarios = await Usuario.findAll();
        return response.json(listarUsuarios);
    },
    cadastro: (req, res) => {
        return res.render('cadastro');
    },
    login: (req, res) => {
        return res.render('login');
    },
    auth: async (req, res) => {
        const { email, senha } = req.body;

        const usuario = await Usuario.findOne({
            where: {
                email
            }
        });

        if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
            req.session.usuarioLogado = usuario;  //  criando atributo usuarioLogado
            return res.redirect('/');
        }
    },
    enderecos: async (request, response) => {
        const { id } = request.params;

        const endereco = await Endereco.findByPk({
            where: {
                usuarios_id: id
            }
        });

        return response.json(endereco);
    },
    enderecosUpdate: async (request, response) => {
        const { id } = request.params;
        const { lougradouro, numero, bairro, cidade, cep, complemento } = request.body;

        const endereco = await Endereco.findOne({
            where: {
                usuarios_id: id
            }
        });

        usuarioID = endereco.id;

        const enderecoAtualizar = await Endereco.update({
            lougradouro,
            numero,
            bairro,
            cidade,
            cep,
            complemento
        }, {
            where: { usuarioID }
        });

        return response.json(enderecoAtualizar);
    },
    create: async (request, response) => {
        const { nome, telefone, email, senha, cpf, enderecos_id } = request.body;

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
            where: { id }
        });

        return response.json(usuarioRemover);

    }
}
module.exports = usuariosController;