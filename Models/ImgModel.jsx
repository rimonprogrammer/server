const mongoose = require('mongoose');

const ImgSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true
    },
    tag : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Image', ImgSchema);
