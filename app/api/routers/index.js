
var express = require('express');
var router = express.Router();
var mw = require('../middleware/my-midleware');
var tesController = require('../controller/testCont');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main/index', {
    title: "LABSENI"
  });
});

router.get('/about', function(req, res, next){
  res.render('main/index'), {
    title: "LABSENI"
  };

});

router.get('/product', function(req, res, next){
  res.render('main/index', {
    title: "LABSENI"
  });

});

router.get('/login', function(req, res, next){
  res.render('main/form',{
    title: 'login'
  });

});

router.get('/tester', tesController.displayTest);

module.exports = router;
