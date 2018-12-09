var http = require('http');

http.createServer((req, res)=>{
	if(req.method === 'POST'){
		var data = "";
		req.on('data', function(chunk){
			data+=chunk;
		})
		req.on('end', ()=>{
			res.writeHead(200, {"content-type": "text/plain"})
			res.end(data.toUpperCase());
		})
	}
}).listen(process.argv[2])
