const fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
	list.forEach(function(data){
		if(data.endsWith('.'+process.argv[3])){
			console.log(data);
		}	
	});
});
