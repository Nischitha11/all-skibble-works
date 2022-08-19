const mongoose = require("mongoose");

 module.exports.bootstrap = ()=>{
    var connectionString = "process.env.MONGO-URIError";
    mongoose.connect(
        connectionString,
        {useNewUrlParser: true, useUnifiedTopology: true},
        ()=>{
            console.log("Mongo connected...");
        }
        );
};