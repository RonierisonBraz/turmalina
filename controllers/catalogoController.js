const { Produto, Categoria, sequelize } = require('../models');

const catalogoController = {
    index: (request, response) => {
        return response.render('catalogo');
    },
    listarTodosProdutos: async (request, response) => {
        let produtos = await Produto.findAll();
        return response.json(produtos);
    },
    paginaProduto: async (request, response) => {
        const { id } = request.params;

        const produto = await Produto.findOne({
            where: { id }
        });

        return response.render('Produto', { Produto: produto });   // renderizei Produto.ejs 
    },
    mostrarProduto: async (request, response) => {
        const { id } = request.params;
        
        return response.redirect(`/catalogo/categoria/${id}`);  // to redicionando para metodo paginaProduto
    },
    cadastrarProduto: async (request, response) => {
        const { nome, descricao, valor, quantidade, categorias_id, img } = request.body;

        const novoProduto = await Produto.create({
            nome,
            descricao,
            valor,
            quantidade,
            categorias_id,
            img
        });

        return response.json(novoProduto);
    },
    atualizarProduto: async (request, response) => {
        const { id } = request.params;
        const { nome, descricao, valor, quantidade } = request.body;

        const produtoAtualizado = await Produto.update({
            nome,
            descricao,
            valor,
            quantidade
        }, {
            where: { id }
        })
        return response.json(produtoAtualizado);
    },
    deletarProduto: async (request, response) => {
        const { id } = request.params;

        const produtoDelete = await Produto.destroy({
            where: { id }
        });

        return response.json(produtoDelete);
    },
    produtosCategoria: async (request, response) => {
        const { nome } = request.params;

        const categoria = await Categoria.findOne({
            where: { nome: nome }
        });

        const produtosCategoria = await Produto.findAll({
            where: { categorias_id: categoria.id }
        });

        return response.render('categoria', { Produtos: produtosCategoria, categoria: categoria });  // vai para pagina de categoria
    },
    cadastrarCategoria: async (request, response) => {
        const { nome } = request.body;

        const cadastrarCategoria = await Categoria.create({
            nome
        });

        return response.json(cadastrarCategoria);
    },
    removerCategoria: async (request, response) => {
        const { id } = request.params;

        const removerCategoria = await Categoria.destroy({
            where: { id }
        });

        return response.json(removerCategoria);
    }
}

module.exports = catalogoController;