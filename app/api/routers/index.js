var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main/index');
});

router.get('/about', function(req, res, next){
  res.render('main/index');

});

router.get('/product', function(req, res, next){
  res.render('main/index');

});
module.exports = router;
