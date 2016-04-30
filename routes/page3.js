var express = require('express');
var router = express.Router();

router.get('/page3', function(req, res, next) {
  res.render('page3', {
    title: 'Java Tutor',
    name: 'John Blake'
  });
});

module.exports = router;
