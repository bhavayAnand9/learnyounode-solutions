var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.setHeader("content-type", "text")
	fs.createReadStream(process.argv[3]).pipe(res)
}).listen(process.argv[2], (err)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log('server started at port number 2345');
	}
})


