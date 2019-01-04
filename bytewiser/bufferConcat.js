var abc = [];
process.stdin.on('data', function(data){
	abc.push(data);
});

process.stdin.on('end', function(){
	console.log(Buffer.concat(abc));
})

//console.log(abc)

