var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Skills' });
// });

router.get('/', function(req, res, next) {
  res.redirect('/skills')
})


module.exports = router;
