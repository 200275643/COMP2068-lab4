var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/kondaReddy', function(req, res, next) {
  res.render('kondaReddy', { title: 'Konda Reddy' });
});



router.get('/laxmi', function(req, res, next) {
  res.render('laxmi', { title: 'Rama Laxmi' });
});


router.get('/mahesh', function(req, res, next) {
  res.render('mahesh', { title: 'Mahesh Reddy' });
});

router.get('/chandu', function(req, res, next) {
  res.render('chandu', { title: 'chandu' });
});


module.exports = router;
