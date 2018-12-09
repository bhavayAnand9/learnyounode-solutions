var http = require('http');

var url = [];

for (var i = 2; i < process.argv.length; i++) {
    url.push(process.argv[i]);
}

parseURL(url[0], ()=>{
	parseURL(url[1], ()=>{
		parseURL(url[2], function(){

		})
	})
})

function parseURL(url, cb){
	var result = '';
	http.get(url, function(res){
		res.setEncoding('UTF-8')
		res.on('data', function(chunk){
			result+=chunk;
		});
		res.on('end', function(chunk){
			console.log(result);
			cb();
		});
	});
}


