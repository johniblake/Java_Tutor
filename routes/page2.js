var express = require('express');
var router = express.Router();

router.get('/page2', function(req, res, next) {
  res.render('page2', {
    title: 'Java Tutor',
    name: 'John Blake'
  });
});

module.exports = router;
