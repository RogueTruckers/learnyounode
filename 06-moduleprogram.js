var mymodule = require("./06-mymodule.js");

//Call mymodule to do all the work. You print what it returns (callback)
mymodule(process.argv[2], process.argv[3], function (err, files) {
  if (err) return console.error("error: ", err);
  files.forEach(function (file) {
    console.log(file);
  });
});

//Solution:
// var filterFn = require("./solution_filter.js");
// var dir = process.argv[2];
// var filterStr = process.argv[3];

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error("There was an error:", err);
//   }

//   list.forEach(function (file) {
//     console.log(file);
//   });
// });
