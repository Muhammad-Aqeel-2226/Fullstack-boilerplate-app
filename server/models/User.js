//-----------------------------------------
// Sample of User Model
//-----------------------------------------

// Import mongoose
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true, // removes extra spaces
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // removes extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // auto-lowercases email
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // basic minimum security
  },
}, {timestamps: true});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
