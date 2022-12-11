var http = require("http");
var bl = require("bl"); //Using method 2. Buffer List is API that collect entire stream

var url = process.argv[2];

http.get(url, function (response) {
	response.pipe(
		bl(function (err, data) {
			if (err) {
				return console.error(err);
			}
			console.log(data.toString().length);
			console.log(data.toString());
		})
	);
});

//bl will sit there collecting all the responses. It will not continue until after response is complete

// Solution:
// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })