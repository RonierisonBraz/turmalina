const express = require('express');
const { route } = require('.');
const router = express.Router();
const catalogoController = require('../controllers/catalogoController');

router.get('/', catalogoController.index); //tela de catálogo RENDERIZADO  http://localhost:3000/catalogo/
router.get('/produtos', catalogoController.listarTodosProdutos); //listar todos os produtos http://localhost:3000/catalogo/produtos
router.get('/:nome', catalogoController.produtosCategoria); //pegar categoria pelo nome RENDERIZADO  http://localhost:3000/catalogo/aneis



router.post('/categoria', catalogoController.cadastrarCategoria); //cadastrar categoria
router.delete('/categoria/:id', catalogoController.removerCategoria); //deletar categoria

router.get('/categoria/:id', catalogoController.paginaProduto);   //  http://localhost:3000/catalogo/categoria/1
router.post('/categoria/:nome', catalogoController.mostrarProduto);     // tela do produto RENDERIZADO http://localhost:3000/catalogo/categoria/5
router.post('/', catalogoController.cadastrarProduto); //cadastrar produto  http://localhost:3000/catalogo/
router.delete('/:id', catalogoController.deletarProduto); //deletar produto

module.exports = router;
