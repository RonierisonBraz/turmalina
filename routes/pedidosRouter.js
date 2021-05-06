const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');
const autenticarLogin = require('../middleware/autenticarLogin')


//http://localhost:3000/pedidos/
router.get('/', pedidosController.index);

//sacola
router.post('/additem', pedidosController.produtosSacola);// modificar ===============
router.get('/sacola', autenticarLogin, pedidosController.sacola); //http://localhost:3000/pedidos/sacola
router.put('/sacola/comprar', autenticarLogin, pedidosController.atualizaValorTotalPedidos);  // esse id eh do usuario
router.get('/sacola/comprar', autenticarLogin, pedidosController.atualizaValorTotalPedidos);  // esse id eh do usuario

//pedido
router.post('/', pedidosController.fazerPedido);
router.put('/:id', pedidosController.atualizarPedido);
router.post('/pagamento', pedidosController.finalizarPagamento);
router.get('/pagamento', pedidosController.pagamento);
router.put('/cancelar/:id', pedidosController.cancelarPedido);   // http://localhost:3000/pedidos/
router.delete('/:id', pedidosController.delete);

module.exports = router;