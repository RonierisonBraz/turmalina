const { Usuario, Endereco, Pedido, sequelize } = require('../models/');

const usuariosController = {
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
        if (usuario) {
            if (usuario.senha == senha) {
                req.session.usuarioLogado = usuario;
                return res.redirect('/usuario/perfil/')
            }
        } else {
            console.log(senha);
            console.log(usuario.senha);
            // return res.redirect('/usuario/login');
            alert("Usuario não encontrado!")
        }
    },
    perfilUsuario: async (request, response) => {
        const {id} = request.session.usuarioLogado;
        const usuario = await Usuario.findByPk(id);
        const endereco = await Endereco.findByPk(usuario.enderecos_id);

        const pedidosUsuario = await Pedido.findAll({
            include: ['pagamentos', 'status_pedido'],
            where: {usuarios_id:id}
        });

        return response.render('perfil', {Usuario:usuario, PedidosUsuario:pedidosUsuario, Endereco:endereco});
    },
    // enderecos: async (request, response) => {
    //     const { id } = request.params;
    //     const usuario = await Usuario.findByPk(id);
    //     const enderecoId = usuario.enderecos_id;
    //     const endereco = await Endereco.findByPk(enderecoId);
    //     return response.json(endereco);
    // },
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