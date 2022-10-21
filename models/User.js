const { Schema, model } = require('mongoose');


//TODO add User properties and validation according to assignment
const userSchema = new Schema({
    username: { type: String, require: true, unique: true, minlength: [3, 'Username must be at least 3 characters long'] },
    hashedPassword: { type: String, require: true }
});


userSchema.index({ username: 1 }, {
    //unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;