var http = require('http');

var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end('DemoGod is open at 8080');
};
var www = http.createServer(handleRequest);
www.listen(8080);
