var http = require("http");
var url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding("utf8"); //set the Encoding
  response.on("error", (err) => {
    console.log(err);
  }); //print out err from http get request
  response.on("data", (data) => {
    console.log(data);
  }); //Print out data from http get request
});

//Solution:
// var http = require("http");

// http
//   .get(process.argv[2], function (response) {
//     response.setEncoding("utf8");
//     response.on("data", console.log);
//     response.on("error", console.error);
//   })
//   .on("error", console.error);
