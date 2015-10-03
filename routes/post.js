var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next){
	
	var q = req._parsedUrl.query;
	var title = '';
	var content = '';
	
	fs.exists('./data/' + q, function(exists){
		if(exists){
			fs.readFile('./data/' + q + '/title', function(err, data){
				title = data;
				
				fs.readFile('./data/' + q + '/text', function(err, data){
					content = data;
					
					res.render('post', {title:title, content:content});
				})
			})
		}else{
			res.send('post not found');
		}
	});
	
	//res.render('post', {title:'test title', content:'test content'});
});

router.post('/', function(req, res, next){
	res.send('GET only');
});

module.exports = router;