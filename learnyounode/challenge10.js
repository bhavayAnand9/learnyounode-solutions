var net = require('net');

net.createServer((c)=>{
	var date = new Date();
	c.end(`${format(date.getFullYear())}-${format(date.getMonth()+1)}-${format(date.getDate())} ${format(date.getHours())}:${format(date.getMinutes())}
`);
}).listen(process.argv[2], function(err){
	if(err){
		console.log(`error occured: ${err}`);
	}
	console.log('client connected');
})

function format(num){
	if(num<10)
		return '0'+num
	else
		return num
}
