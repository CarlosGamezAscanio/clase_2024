var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'programacion2, 2024-1', name: 'Carlos Daniel Gamez Ascanio', seccion:'4', Cedula:'30.463.767' });
});

module.exports = router;



