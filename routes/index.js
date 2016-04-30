var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Java Tutor'
  });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', {
    title: 'Java Tutor',
    name: 'John Blake'
  });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', {
    title: 'Java Tutor',
    name: 'John Blake'
  });
});

router.get('/page4', function(req, res, next) {
  res.render('page4', {
    title: 'Java Tutor',
    name: 'John Blake'
  });
});

router.get('/page5', function(req, res, next) {
  res.render('page5', {
    title: 'Java Tutor',
    name: 'John Blake'
  });
});

module.exports = router;
