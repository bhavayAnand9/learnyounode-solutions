var split = require('split');
var through2 = require('through2');
var linenum=0;
process.stdin.pipe(split()).pipe(through2(function(line, encoding, next){
	
	if(linenum%2)
		console.log(line.toString().toUpperCase());
	else
		console.log(line.toString().toLowerCase())
	linenum+=1;
	next();
}));
