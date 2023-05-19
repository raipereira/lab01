const express = require('express');
const mssql = require('mssql');


const app = express();

app.get('/', function(req,res){
   const config = {
    password : "mypassword",
    user: "sa",
    server : "localhost",
    database: "SchoolDB"

    };
    mssql.connect(config, function(err){
        if(err)
        console.log(err);

        const connector = new mssql.Request();
        connector.query( 'Select * from Student', (err, studentlist)=>{
                 if (err)
                 console.log(err);

                 res.send(studentlist);
        });

    });
    
})

app.listen(5000, ()=>{
    console.log("server running at port 3000");
});


