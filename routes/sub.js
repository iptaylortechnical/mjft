var express = require('express');
var router = express.Router();
var mkdirp = require('mkdirp');
var fs = require('fs');

router.get('/', function(req, res, next){
	console.log(req.method);
	res.send('POST only');
});

router.post('/', function(req,res){
	var text = req.body.text;
	var title = req.body.title;
	
	
	//add to 'bank'
	dat = '';
	fs.readFile('./data/bank', function(err, data){
		dat = data;
		dat = title + '&' + dat;
		fs.writeFile('./data/bank', dat);
	
	
		var words = text.split(' ');
		var snippet = '';
	
		console.log(words.length);
	
		if(words.length > 200){
			for(var i = 0; i < 200; i++){
				snippet = snippet + words[i] + ' ';
			}
		}else{
			snippet = text;
		}
	
		var fixed_url_dir = './data/'+title.replace(/ /g, "_");
	
		mkdirp(fixed_url_dir, function(err) { 

		    // path was created unless there was error

		});
	
		fs.writeFile(fixed_url_dir+'/text', text);
		fs.writeFile(fixed_url_dir+'/snippet', snippet);
		fs.writeFile(fixed_url_dir+'/title', title);
	
		res.send('got it');''
	});
	
});

module.exports = router;