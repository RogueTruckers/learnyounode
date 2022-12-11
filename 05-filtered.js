// Import the filesystem module
const fs = require("fs");
const path = require("path");
// Function to get current filenames in directory with specific extension
fs.readdir(process.argv[2], (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      if (path.extname(file) == "." + process.argv[3]) console.log(file);
    });
  }
});

//https://www.geeksforgeeks.org/node-js-fs-readdir-method/ is referenced

// Solution: 
// var fs = require("fs");
// var path = require("path");

// var folder = process.argv[2];
// var ext = "." + process.argv[3];

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err);
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file);
//     }
//   });
// });
