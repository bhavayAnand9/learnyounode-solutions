var fs = require('fs');

var filepath = process.argv[2];

fs.readFile(filepath, function (err, buf) {
  
  for (var prev = 0, curr = 0; curr < buf.length; ++curr) {
    if (buf[curr] === 0x0a) {
      console.log(Buffer.from(buf.slice(prev, curr)));
      prev = curr + 1;
    }
  }
  // last line
  console.log(Buffer.from(buf.slice(prev, buf.length - 1)));
});


