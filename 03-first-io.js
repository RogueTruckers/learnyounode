var fs = require('fs'); //Import a module to use

var curFile = fs.readFileSync(process.argv[2]); //Buffered File using fs
var str = curFile.toString(); //Convert buffered file to a string
var arr = str.split('\n'); //Make the str into array. Each element is after '\n'

console.log(arr.length-1)