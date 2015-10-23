var fs = require('fs'); // filesystem module

filename = process.argv[2];
file = fs.readFileSync( filename );
numlines = file.toString().split('\n').length - 1;

console.log( numlines );
