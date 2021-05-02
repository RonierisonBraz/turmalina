const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

http://localhost:3000/pedidos/
router.get('/', pedidosController.index);


router.post('/', pedidosController.create);

router.get('/sacola', pedidosController.sacola);


http://localhost:3000/pedidos/id
router.put('/:id', pedidosController.update);

router.post('/pagamento', pedidosController.finalizarPagamento);

router.put('/cancelar/:id', pedidosController.cancelarPedido);   // http://localhost:3000/pedidos/

router.delete('/:id', pedidosController.delete);

module.exports = router;