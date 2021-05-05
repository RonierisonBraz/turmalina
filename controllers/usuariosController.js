const { Usuario, Endereco, sequelize } = require('../models/');
// const Endereco = require('../models/Endereco');


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
        const { email, senha} = req.body;

        const usuario = await Usuario.findOne({
            where: {
                email
            }
        });

        console.log(usuario.id);
        // if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
       if (usuario && usuario.senha == senha) {
            req.session.usuarioLogado = usuario;
            return res.redirect('/usuario/perfil/')
        } else {
            console.log(senha);
            console.log(usuario.senha);
            return res.redirect('/usuario/login');
        }
    },
    perfilUsuario: async (request, response) => {
        const {id} = request.session.usuarioLogado;
        const usuario = await Usuario.findByPk(id);

        console.log(usuario);

        return response.render('perfil', {usuario});
    },
    enderecos: async (request, response) => {
        const { id } = request.params;

        const usuario = await Usuario.findByPk(id);

        const enderecoId = usuario.enderecos_id;

        const endereco = await Endereco.findByPk(enderecoId);
        // const enderecos = await Endereco.findOne();


        return response.json(endereco);
    },
    enderecosUpdate: async (request, response) => {
        const { id } = request.params;
        const { lougradouro, numero, bairro, cidade, cep, complemento } = request.body;


        const usuario = await Usuario.findByPk(id);

        const enderecoId = usuario.enderecos_id;

        const enderecoAtualizar = await Endereco.update({
            lougradouro,
            numero,
            bairro,
            cidade,
            cep,
            complemento
        }, {
            where: {id: enderecoId}
        });
        return response.json(enderecoAtualizar);
    },
    senhaUpdate: async (request, response) => {
        const { id } = request.params;
        const { senha } = request.body;

        const senhaAtualizar = await Usuario.update({
            senha
        },{
            where: { id }
        });
        return response.json(senhaAtualizar);
    },
    telefoneUpdate: async (request, response) => {
        const { id } = request.params;
        const { telefone } = request.body;

        const telefoneAtualizar = await Usuario.update({
            telefone
        },{
            where: { id }
        });
        return response.json(telefoneAtualizar);
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