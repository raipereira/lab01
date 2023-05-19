const express = require('express');
const http = require('http');
// const logger = require('morgan');
const app = express();

// app.use(logger());

// app.use(function(req, res, next){
//     console.log("In comes a " +req.method + " to " + req.url);
//     next();
// })

app.get("/", (req, res) =>{
    res.end("Welcome to the homePage");
})

app.get("/about", (req, res) =>{
    res.end("Welcome to the about page");
})

app.get("/hello/:who", function(req, res){
    res.end("Hello " + req.params.who + ":");
})

app.use(function(req, res){
    res.statusCode = 404;
    res.end("404!");
})

// app.use(function(req, res){
//     res.writeHead('200', {'Content-Type': 'text/plain'});
//     res.end('Hello World!\n');
// });

http.createServer(app).listen(8080);