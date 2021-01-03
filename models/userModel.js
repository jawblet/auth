const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Enter a username.'],
        unique: [true, 'That username is taken.'],
        lowercase: true,
        validate: [validator.isAlphanumeric, 'Usernames may only have letters and numbers.']
    },
    email: {
        type: String,
        require: [true, 'Enter an email address.'],
        unique: [true, 'That email address is taken.'],
        lowercase: true,
        validate: [validator.isEmail, 'Enter a valid email address.']
    },
    password: {
        type: String,
        required: [true, 'Enter a password.'],
        minLength: [4, 'Password should be at least four characters']
    }, 
    passwordConfirm: {
        type: String,
        required: [true, 'Retype your password.'],
        validate: {
            validator: function(el) {
                return el === this.password;
            }, message: 'Passwords don\'t match.'
        }
    }
});

//schema middleware to apply before saving 
userSchema.pre('save', async function(next) {
    
    //hash the password, set hash cost to 12  
    this.password = await bcrypt.hash(this.password, 12);

    //remove the passwordConfirmed field 
    this.passwordConfirm = undefined; 
    next();
});

//check password at login
userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };

const User = mongoose.model('User', userSchema);
module.exports = User; 
