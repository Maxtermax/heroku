var express=require('express');
var app=express();
var http=require('http');
var server=http.createServer(app);

app.get('/',function (req,res){
		res.end("server creado");
});


var port = process.env.PORT || 1010;
server.listen(port, function() {
  console.log("Listening on " + port);
});



