var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next){
  res.render('index', {title: 'About'});

});

router.get('/product', function(req, res, next){
  res.render('index', {title: 'Product'});

});
module.exports = router;
