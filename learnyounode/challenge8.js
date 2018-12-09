var http = require('http');

http.get(process.argv[2], (res)=>{
	var buff = "";
	res.on('data', (chunk)=>{
		buff += chunk;
	});
	res.on('end', ()=>{
		console.log(buff.length);
		console.log(buff);
	});
	
})
