var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minLenght: 1
    }
});


module.exports = {User};