const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

http://localhost:3000/pedidos/
router.get('/', pedidosController.index);


router.post('/', pedidosController.create);


http://localhost:3000/pedidos/id
router.put('/:id', pedidosController.update);


router.delete('/:id', pedidosController.delete);

module.exports = router;