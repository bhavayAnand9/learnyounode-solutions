var http = require('http');
//var https = require('https');

http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.on('data', function(chunk){
		console.log(chunk);
	})

}).on('error', function(e){
	console.log(`an error occured: ${e}`);
})
