var express = require('express');
var app = express();

app.get('/',function(req,res){
	console.log('come on!!');
	res.send('Hello World');
});

app.listen(3000);

// console.log('HHHHEWQHEWQHEWQ');

/*var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Barry");
  response.end();
}).listen(8888);*/