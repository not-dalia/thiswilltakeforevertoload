var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('taking forever to load');
});


router.get('/toomanyredirects', function(req, res, next) {
  setTimeout(function(){res.redirect('/toomanyredirects');}, 3000);
});

router.get('/help', function(req, res, next) {
  res.render('index', {title: 'This will take forever to load'});
});

router.get('/:anything', function(req, res, next) {
  res.redirect('/help');
});



module.exports = router;
