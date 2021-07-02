const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {type: String, unique: true, required: [true, "can't be blank"], index: true},
    email: {type: String, unique: true, required: [true, "can't be blank"], index: true},
    password: {type: String, required: [true, "can't be blank"]},
    photo: String,
    bio: String,
}, {timestamps: true});

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

userSchema.pre('save', function(next){
    const user = this;

    if(!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, function(err,hash){
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', userSchema)

module.exports = User;