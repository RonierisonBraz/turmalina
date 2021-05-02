const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

//PERFIL
router.get('/perfil', usuariosController.perfil); // http://localhost:3000/perfil
router.post('/login', usuariosController.auth);
router.get('/login', usuariosController.login);
router.get('/cadastro', usuariosController.cadastro);


//USUARIOS
router.get('/', usuariosController.listarUsuarios);


// rotas de endereço: http://localhost:3000/usuario/enderecos/1
router.get('/enderecos/:id', usuariosController.enderecos);
router.put('/enderecos/:id', usuariosController.enderecosUpdate);

// rota de atualizar senha e telefone: http://localhost:3000/usuario/alterarSenha/1
router.put('/alterarSenha/:id', usuariosController.senhaUpdate);
router.put('/alterarTelefone/:id', usuariosController.telefoneUpdate);

router.post('/', usuariosController.create); // http://localhost:3000/usuarios/

router.put('/:id', usuariosController.update); // http://localhost:3000/usuarios/id

router.delete('/:id', usuariosController.delete); // http://localhost:3000/usuarios/id

router.get('/perfil/:id', usuariosController.perfil);   //CRIAR MIDDLEWARE QUE SO ACESSE SE FOR O ID DELE
//OU ENTAO FAZ UMA SESSION QUE VAI PEGAR O USUARIO LOGADO 


module.exports = router;
