const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email'])
};

UserSchema.methods.generateAuthToken = function() {
  const user = this;
  const access = 'auth';
  const token =  jwt.sign({_id: user._id.toHexString(), access}, 'password').toString();

  user.tokens = user.tokens.concat({access, token});

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function (token) {
  const User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, 'password')
  } catch (e) {
    return Promise.reject('test');
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};


UserSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {
     bcrypt.genSalt(10, (err, salt) => {
     bcrypt.hash(user.password, salt, (err, hash) => {
         console.log(hash);
         user.password = hash;
         next();
     });
  });
  } else {
    next();
  }
});

const User = mongoose.model('User', UserSchema) 



  module.exports = {User};