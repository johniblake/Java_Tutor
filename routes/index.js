var express = require('express');
var router = express.Router();
var responseparser = require('../public/assets/js/responseparser');

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
	console.log('body: ' + JSON.stringify(req.body));
  var post_data = JSON.stringify(req.body);
  console.log(typeof responseparser.regexer);
  var r = responseparser.regexer(post_data);
  console.log(r);
	res.send(r);
});

module.exports = router;
