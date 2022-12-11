//Referenced filtered.js
var fs = require("fs");
var path = require("path");

module.exports = (directory, ext, callback) => {
  fs.readdir(directory, (err, files) => {
    if (err) return callback(err);
    var filteredList = [];
    files.forEach((file) => {
      if (path.extname(file) === "." + ext) filteredList.push(file);
    });
    return callback(null, filteredList);
  });
};

//Solution:
// var fs = require("fs");
// var path = require("path");

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err);
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === "." + filterStr;
//     });

//     callback(null, list);
//   });
// };
