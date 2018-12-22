var crypto  = require('crypto');

var data = process.argv[2];

var stream = crypto.createDecipher('aes256', data)

process.stdin.pipe(stream).pipe(process.stdout);
