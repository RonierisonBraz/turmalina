const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// router.get('/', usuariosController.index); // http://localhost:3000/turmalina/perfil/

router.post('/login', usuariosController.auth);
router.get('/login', usuariosController.login);
router.get('/cadastro', usuariosController.cadastro);




router.get('/enderecos/:id', usuariosController.enderecos);
router.put('/enderecos/:id', usuariosController.enderecosUpdate);



router.post('/', usuariosController.create); // http://localhost:3000/usuarios/

router.put('/:id', usuariosController.update); // http://localhost:3000/usuarios/id

router.delete('/:id', usuariosController.delete); // http://localhost:3000/usuarios/id

module.exports = router;