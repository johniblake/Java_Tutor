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
    title: 'Java Tutor'
  });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', {
    title: 'Java Tutor'
  });
});

router.get('/page4', function(req, res, next) {
  res.render('page4', {
    title: 'Java Tutor'
  });
});

router.get('/page5', function(req, res, next) {
  res.render('page5', {
    title: 'Java Tutor'
  });
});

router.post('/endpoint', function(req, res){
	var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});

module.exports = router;
