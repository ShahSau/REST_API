const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const customerRoute = require("./routes/customer");


app.use(bodyParser.json());


//Creating and using route
const personRoute = require("./routes/person");

const logger = (req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
};
app.use(logger);

app.use(personRoute);
app.use(customerRoute);

//Static folder
app.use(express.static("public"));


//404  handler
const err4 = (req,res,next)=>{
    //res.status(404).send("You are lost !!");
    res.sendFile(path.join(__dirname, "../public/404.html"));
};
app.use(err4);

//500 handler
app.use((err,req,res,next)=>{
    console.log(err);
    res.sendFile(path.join(__dirname, "../public/500.html"));

});

// Creating and listening to port
const PORT= process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server has started on ${PORT}`);
});