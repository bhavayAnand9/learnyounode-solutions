var fs = require('fs')
var path = require('path');

module.exports = function (dir, ext, callback){
	fs.readdir(dir, 'utf-8', function(err, buffer){
		var filteredFiles = [];
		if(err){
			return callback(err)
		}
		else{
			buffer.forEach(function(list){
				if(path.extname(list) === '.'+ext){
					filteredFiles.push(list);
				}
			});
			callback(null, filteredFiles);
		}
	})
}

///module.exports = printDir;
