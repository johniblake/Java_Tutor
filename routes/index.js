var express = require('express');
var router = express.Router();
var responseparser = require('../public/assets/js/responseparser');
var formidable = require('formidable');
var util = require('util');
var http = require('http');
var fs = require('fs-extra');
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

router.post('/upload', function(req, res){
  console.log('in /upload');
  console.log("req.url: " + req.url);
  console.log("req.method: " + req.method.toLowerCase());
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // Instantiate a new formidable form for processing.
    var form = new formidable.IncomingForm();
    // form.parse analyzes the incoming stream data, picking apart the different fields and files for you.
    var new_location;
    form.parse(req, function(err, fields, files) {
      if (err) {
        // Check for and handle any errors here.
        console.error(err.message);
        return;
      }
      new_location = (Object.keys(files))[0];
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      // This last line responds to the form submission with a list of the parsed data and files.
      res.end(util.inspect({fields: fields, files: files}));
    });

    form.on('end', function(fields, files) {
      /* Temporary location of our uploaded file */
      var temp_path = this.openedFiles[0].path;
      /* The file name of the uploaded file */
      var file_name = this.openedFiles[0].name;
      /* Location where we want to copy the uploaded file */

      new_location = new_location + '/';

      fs.copy(temp_path, new_location + file_name, function(err) {
        if (err) {
          console.error(err);
        } else {
          console.log("success!")
        }
      });
    });
    return;
  }
});

module.exports = router;
