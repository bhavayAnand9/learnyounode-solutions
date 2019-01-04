process.stdin.on('data', function(buff){
	//const buff = Buffer.from(buffer);
	for(var i=0; i<buff.length; i++){
		if(buff[i] === 46){
			buff.write('!', i);
		}
	}
	console.log(buff);
})
