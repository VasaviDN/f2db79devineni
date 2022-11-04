var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trees', { title: 'Search Results of Trees' });
});

module.exports = router;
