var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
	title_list_raw = '';
	fs.readFile('./data/bank', function(err, data){
		title_list_raw = data + '';
	
		title_list_arr = title_list_raw.split('&');
	
		title_arr = [];
		snip_arr = [];
		
		fs.readFile('./data/' + title_list_arr[0].replace(/ /g, '_') + '/snippet', function(err, data){
			snip_arr[0] = data;
			
			fs.readFile('./data/' + title_list_arr[1].replace(/ /g, '_') + '/snippet', function(err, data){
				snip_arr[1] = data;
				
				fs.readFile('./data/' + title_list_arr[2].replace(/ /g, '_') + '/snippet', function(err, data){
					snip_arr[2] = data;
					
					fs.readFile('./data/' + title_list_arr[3].replace(/ /g, '_') + '/snippet', function(err, data){
						snip_arr[3] = data;
						
						fs.readFile('./data/' + title_list_arr[4].replace(/ /g, '_') + '/snippet', function(err, data){
							snip_arr[4] = data;
							
							res.render('main', {
								l0:title_list_arr[0].replace(/ /g, '_'),
								l1:title_list_arr[1].replace(/ /g, '_'),
								l2:title_list_arr[2].replace(/ /g, '_'),
								l3:title_list_arr[3].replace(/ /g, '_'),
								l4:title_list_arr[4].replace(/ /g, '_'),
								
								t0:title_list_arr[0], 
								t1:title_list_arr[1], 
								t2:title_list_arr[2], 
								t3:title_list_arr[3], 
								t4:title_list_arr[4], 
		
								s0:snip_arr[0], 
								s1:snip_arr[1], 
								s2:snip_arr[2], 
								s3:snip_arr[3], 
								s4:snip_arr[4]});
						});
					});
				});
			});
		});
		
	
		// for(i = 0; i < 5; i++){
// 			title_arr[i] = title_list_arr[i];
// 			fs.readFile('./data/'+title_arr[i].replace(/ /g, '_')+'/snippet', function(err, data){
// 				snip_arr[i] = data;
// 			});
// 		}

	});
});

module.exports = router;
