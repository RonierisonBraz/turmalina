const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

router.get('/', pedidosController.index);
router.post('/', pedidosController.create);
router.put('/:id', pedidosController.update);
router.delete('/:id', pedidosController.delete);

module.exports = router;