var http = require("http");
var fs = require("fs");
var map = require("through2-map");

var portNumber = process.argv[2];

//gets the POST request. Converts it to uppercase then sends it back
var server = http.createServer((request, response) => {
	console.log(request.body);
	request
		.pipe(
			map((chunk) => {
				return chunk.toString().toUpperCase();
			})
		)
		.pipe(response);
});

//Port the server is listening to
server.listen(portNumber);

// Solution:
// 'use strict'
//     const http = require('http')
//     const map = require('through2-map')

//     const server = http.createServer(function (req, res) {
//       if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//       }

//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })

//     server.listen(Number(process.argv[2]))