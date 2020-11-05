const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin-shahriar:74247427saurov@cluster0.wotwe.mongodb.net/restfulApi",{useNewUrlParser: true,useUnifiedTopology: true ,useFindAndModify: false});

const CustomerSchema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        required: true,
        unique: true
    }
});


module.exports= mongoose.model("Customer", CustomerSchema);

