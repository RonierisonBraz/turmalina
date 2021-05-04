const express = require('express');
const { route } = require('.');
const router = express.Router();
const catalogoController = require('../controllers/catalogoController');

router.get('/', catalogoController.index); //tela de catálogo
router.get('/produtos', catalogoController.listarTodosProdutos); //listar todos os produtos
router.get('/:nome', catalogoController.produtosCategoria); //pegar categoria pelo nome

router.post('/', catalogoController.cadastrarCategoria); //cadastrar categoria
router.delete('/:id', catalogoController.removerCategoria); //deletar categoria

router.post('/', catalogoController.cadastrarProduto); //cadastrar produto
router.put('/:id', catalogoController.atualizarProduto); //atualizar produto
router.delete('/:id', catalogoController.deletarProduto); //deletar produto

module.exports = router;
