var http = require('http')

var handleRequest = function (request, response) {
				console.log("Received Request for "+ request.url);
				response.writeHead(200);
				response.end("LeoOrion is Lion Hunter");
};

var www = http.createServer(handleRequest);
www.listen(8080);


