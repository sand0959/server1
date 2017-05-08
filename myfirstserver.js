var http = require("http");
var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
	response.end("You are great!!" + request.url);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

	console.log("You are an amazing person!  http://localhost:%s", PORT);
});

function handleRequest2(request, response) {
	response.end("You are a moron!!" + request.url);
}
var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
	console.log("You have bad breath!  http://localhost:%s", PORT2);
});