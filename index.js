const express = require("express");
var app=express();

var port=8000;

app.use(express.static('frontend'));

app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
})
