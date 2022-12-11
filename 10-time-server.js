var net = require("net");

var portNumber = process.argv[2];

//Ensure all numbers are 2 digits
function add0(number) {
	if (number < 10) {
		return "0" + number;
	}
	return number;
}

//Gets the date in format: "YYYY-MM-DD HH:MM"
var server = net.createServer((socket) => {
	var date = new Date();
	socket.end(
		date.getFullYear() +
			"-" +
			add0(date.getMonth() + 1) +
			"-" +
			add0(date.getDate()) +
			" " +
			add0(date.getHours()) +
			":" +
			add0(date.getMinutes()) +
			"\n"
	);
});

server.listen(portNumber);

// Solution: "use strict";
// const net = require("net");

// function zeroFill(i) {
// 	return (i < 10 ? "0" : "") + i;
// }

// function now() {
// 	const d = new Date();
// 	return (
// 		d.getFullYear() +
// 		"-" +
// 		zeroFill(d.getMonth() + 1) +
// 		"-" +
// 		zeroFill(d.getDate()) +
// 		" " +
// 		zeroFill(d.getHours()) +
// 		":" +
// 		zeroFill(d.getMinutes())
// 	);
// }

// const server = net.createServer(function (socket) {
// 	socket.end(now() + "\n");
// });

// server.listen(Number(process.argv[2]));
