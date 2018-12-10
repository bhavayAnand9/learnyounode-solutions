let concatStream = require('concat-stream');

const reverse = str => Array.from(str).reverse().join('');

process.stdin.pipe(concatStream(function(data){
	console.log(reverse(data.toString('utf8')));
}))
