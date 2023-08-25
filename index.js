
// exporting all the function and libraries of express
const express=require('express');

// path variable
const path=require('path');

// port id
const port=1000;


// app having all the function of express and firing up our framework 
const app=express();
// settting EJS
app.set('view engine','ejs');

// defining path of result file with respect to current file
app.set('views',path.join(__dirname,'views'));

// setting up routes
app.use('/',require('./routes'));

// starting server
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        return;
    }
    console.log("Hello World");
});