var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*GET kondaReddy Page */
router.get('/kondaReddy', function(req, res, next) {
  res.render('kondaReddy', { title: 'Konda Reddy' });
});


/*GET laxmi Page */
router.get('/laxmi', function(req, res, next) {
  res.render('laxmi', { title: 'Rama Laxmi' });
});

/*GET mahesh Page */
router.get('/mahesh', function(req, res, next) {
  res.render('mahesh', { title: 'Mahesh Reddy' });
});
/*GET chandu Page */
router.get('/chandu', function(req, res, next) {
  res.render('chandu', { title: 'chandu' });
});


module.exports = router;
