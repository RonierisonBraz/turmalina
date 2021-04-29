var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');

//PERFIL
router.get('/perfil', usuariosController.perfil); // http://localhost:3000/perfil
router.post('/login', usuariosController.auth);
router.get('/login', usuariosController.login);
router.get('/cadastro', usuariosController.cadastro);

//USUSARIOS
router.get('/usuarios', usuariosController.listarUsuarios);



router.get('/enderecos', usuariosController.enderecos);
router.put('/enderecos/:id', usuariosController.enderecosUpdate);



router.post('/', usuariosController.create); // http://localhost:3000/usuarios/

router.put('/:id', usuariosController.update); // http://localhost:3000/usuarios/id

router.delete('/:id', usuariosController.delete); // http://localhost:3000/usuarios/id

module.exports = router;
