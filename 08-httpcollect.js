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
