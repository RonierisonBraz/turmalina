const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

//http://localhost:3000/pedidos/
router.get('/', pedidosController.index);

//sacola
router.post('/additem', pedidosController.produtosSacola);// modificar ===============
router.get('/sacola/:id', pedidosController.sacola); //http://localhost:3000/pedidos/sacola/1
router.put('/sacola/comprar/:id', pedidosController.atualizaValorTotalPedidos);  // esse id eh do usuario
router.get('/sacola/comprar/:id', pedidosController.atualizaValorTotalPedidos);  // esse id eh do usuario

//pedido
router.post('/', pedidosController.fazerPedido);
router.put('/:id', pedidosController.atualizarPedido);
router.post('/pagamento', pedidosController.finalizarPagamento);
router.put('/cancelar/:id', pedidosController.cancelarPedido);   // http://localhost:3000/pedidos/
router.delete('/:id', pedidosController.delete);

module.exports = router;