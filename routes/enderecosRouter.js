const express = require('express');
const router = express.Router();
const enderecoController = require('../controllers/enderecoController');


router.get ('/', enderecoController.index);



module.exports = router;