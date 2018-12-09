var mod = require('./module')

mod(process.argv[2], process.argv[3], function(err, data){
	if(err){
		console.log(err);
	}
	else{
		data.forEach(function(abcd){
			console.log(abcd);
		});
	}
})
