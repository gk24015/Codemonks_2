var mongoose = require("mongoose");
var postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
     },
     body: {
        type: String,
        required: true
     },
     author: {
        type: String,
        required: true
     },
     date: {
        type: Date,
        default: Date.now
     }

});

module.exports= mongoose.model("posts",postSchema);