var duplex = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function(cmd, args){
	var proc = spawn(cmd, args);
	return duplex(proc.stdin, proc.stdout);;
}
