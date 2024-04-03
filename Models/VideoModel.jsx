const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    video : {
        type : String,
        required : true
    },
    tag : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Video', VideoSchema);
