var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.index); // http://localhost:3000/usuarios/
router.post('/', usuariosController.create); // http://localhost:3000/usuarios/
router.put('/:id', usuariosController.update); // http://localhost:3000/usuarios/id
router.delete('/:id', usuariosController.delete); // http://localhost:3000/usuarios/id

module.exports = router;
