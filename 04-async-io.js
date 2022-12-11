var fs = require('fs') //import module

//You don't know what this is
var arr = undefined
var lines = 0

function newLines(callback) {
  //Read the file. Make it a string. Refer to first-io for inner function details
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    arr = fileContents.toString().split('\n')
    lines = arr.length - 1
    callback()
  })
}

//Too wait for readFile
function logLine() {
  console.log(lines)
}

newLines(logLine)

//THEIR SOLUTION
//     var fs = require('fs')
//     var file = process.argv[2]
    
//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })