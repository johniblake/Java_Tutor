var express = require('express');
var router = express.Router();

router.get('/page5', function(req, res, next) {
  res.render('page5', {
    title: 'Java Tutor',
    name: 'John Blake'
  });
});

module.exports = router;
