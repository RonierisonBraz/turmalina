var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre');
});

// router.get('/contato', function(req, res, next) {
//   res.render('contato');
// });

module.exports = router;
