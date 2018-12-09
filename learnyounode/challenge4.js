var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, buffer){
	console.log(buffer.split('\n').length-1);
});
