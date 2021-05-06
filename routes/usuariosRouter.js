const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const validarCadastro = require('../middleware/validarCadastro');
const autenticarLogin = require('../middleware/autenticarLogin')

//PERFIL
// router.get('/perfil/:id', usuariosController.perfil); // http://localhost:3000/perfil
router.post('/login', usuariosController.auth);
router.get('/login', usuariosController.login);
router.get('/cadastro', usuariosController.cadastro);

// rotas de endereço: http://localhost:3000/usuario/enderecos/1
// router.get('/enderecos/:id', usuariosController.enderecos);
router.put('/enderecos/:id', usuariosController.enderecosUpdate);

// rota de atualizar senha e telefone: http://localhost:3000/usuario/alterarSenha/1
router.put('/alterar-senha/:id', usuariosController.senhaUpdate);
router.put('/alterar-telefone/:id', usuariosController.telefoneUpdate);


router.post('/cadastro', validarCadastro, usuariosController.create); // http://localhost:3000/usuarios/

router.put('/alterar-dados/:id', usuariosController.update); // http://localhost:3000/usuarios/id

router.delete('/:id', usuariosController.delete); // http://localhost:3000/usuarios/id

router.get('/perfil', autenticarLogin, usuariosController.perfilUsuario);   //CRIAR MIDDLEWARE QUE SO ACESSE SE FOR O ID DELE
router.put('/alterar-endereco/:id', usuariosController.enderecosUpdate);
// router.put('/logout', usuariosController.logout);

// router.get('/teste/:id', usuariosController.teste);
module.exports = router;
