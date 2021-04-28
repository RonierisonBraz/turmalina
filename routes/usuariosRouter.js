var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// http://localhost:3000/turmalina/usuario

// router.get('/', usuariosController.index); //rota de teste

router.post('/login', usuariosController.auth);
router.get('/login', usuariosController.login);
router.get('/cadastro', usuariosController.cadastro);
router.get('/enderecos', usuariosController.enderecos);

router.post('/', usuariosController.create); // http://localhost:3000/usuarios/
router.put('/:id', usuariosController.update); // http://localhost:3000/usuarios/id
router.delete('/:id', usuariosController.delete); // http://localhost:3000/usuarios/id

module.exports = router;
