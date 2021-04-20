const { request, response } = require('express');
const { Produto, sequelize } = require('../models');

const produtosController = {
    list: async(request, response) => {
        let produtos = await Produto.findAll();
        return response.json(produtos);
    },
    create: async (request, response) => {
        const {nome, descricao, valor, quantidade, categoria_id} = request.body;

        const novoProduto = await Produto.create({
            nome,
            descricao,
            valor,
            quantidade,
            categoria_id
        });

        return response.json(novoProduto);
    },
    update: async (request, response) => {
        const { id } = request.params;
        const {nome, descricao, valor, quantidade} = request.body;

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
    delete: async (request, response) => {
        const { id } = request.params;

        const produtoDelete = await Produto.destroy({
            where: {id}
        });

        return response.json(produtoDelete);
        
    },

    show: async(request, response) => {
        const { id } = request.params;

        const produtocategoria = await Produto.findAll({
            where: {
                categoria_id: id
            }
        });

        return response.json(produtocategoria);
    }

}

module.exports = produtosController;