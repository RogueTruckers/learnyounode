var http = require("http");
var fs = require("fs");

var portNumber = process.argv[2];
var fileToRead = process.argv[3];

//This is the actual file server that will serve the page
var server = http.createServer((request, response) => {
	var file = fs.createReadStream(fileToRead); 
	file.pipe(response);
});

server.listen(portNumber); //Where the server will listen

// Solution:
// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
