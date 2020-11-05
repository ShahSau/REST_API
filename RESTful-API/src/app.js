const express = require("express");

const path = require("path");
const app = express();

//Creating and using route
const personRoute = require("./routes/person");

const logger = (req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
};
app.use(logger);
app.use(personRoute);

//Static folder
app.use(express.static("public"));


//404  handler
const err4 = (req,res,next)=>{
    //res.status(404).send("You are lost !!");
    res.sendFile(path.join(__dirname, "../public/404.html"));
};
app.use(err4);

//505 handler
app.use((err,req,res,next)=>{
    console.log(err);
    res.sendFile(path.join(__dirname, "../public/504.html"));

});

// Creating and listening to port
const PORT= process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server has started on ${PORT}`);
});