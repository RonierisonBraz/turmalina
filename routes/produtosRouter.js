const express = require('express');
const produtosController = require('../controllers/produtosController');
const router = express.Router();
// const produtosRouter = require('../controllers/produtosController');

router.get('/', produtosController.list);
router.post('/', produtosController.create);
router.put('/:id', produtosController.update);
router.delete('/:id', produtosController.delete);
router.get('/:id', produtosController.show);


module.exports = router;
