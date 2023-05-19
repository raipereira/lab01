var http = require("http");
var dt = require("./myfirstmodule");
//var fs = require('fs');

http.createServer(function(request, response){
   // fs.readFile('/html/demofile1.html', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'}); 
       response.write("Current date: " + dt.myDateTime());
       // response.write(data)
        return response.end();
   // });
    response.end();
}).listen(8080);
console.log('Server running at http://localhost:8080/');