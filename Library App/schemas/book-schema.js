const mongoose = require("mongoose");

module.export = mongoose.Schema(
    {
    Name: {type: String, required: true},
    Description: {type: String, required: true},
    Author: {type: String, required: true},
    pagesCount: {type: Number, required:true},
    Location: {type: String, required: true},
    Publisher: {type: String, required: true},
    PublishedDate: {type: String, required:true},
    createdAt: {type: Date, default: Date.now},
    genre: String,
    cover: String,
    status: {type: String,
        enum:['IN','OUT','NA'],
        default: 'IN',
        required: true,
    },
    review:[
        {
            rating:{type: Number, required: true},
            comment: {type: String},
            username: {type: String},
    },
    ],

});


module.exports = BookSchema;
