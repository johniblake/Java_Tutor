var express = require('express');
var router = express.Router();

router.get('/page4', function(req, res, next) {
  res.render('page4', {
    title: 'Java Tutor',
    name: 'John Blake'
  });
});

module.exports = router;
