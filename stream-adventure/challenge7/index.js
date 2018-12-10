var http = require('http');
var through2 = require('through2');

http.createServer((req, res)=>{
	if(req.method === "POST"){
		req.pipe(through2(write, end)).pipe(res);
	}
}).listen(process.argv[2]);

function write(buffer, encoding, next){
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done){
	done();
}
