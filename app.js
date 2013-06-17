yar http = require("http");
var a =10;

var server = http.createServer( function(res, res) {
	res.setHeader(200, { "Content-Type": "text/html"});
	res.end("<h1>Hello There !! </h1>");
});

server.listen(8888);
console.log("Server started. Lisening on port 8888");
