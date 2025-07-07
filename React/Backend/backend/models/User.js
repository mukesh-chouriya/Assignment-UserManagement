const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'is invalid']
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Phone must be 10 digits']
  },
  age: {
    type: Number,
    required: true,
    min: [1, 'Age must be at least 1'],
    max: [100, 'Age must be less than or equal to 100']
  }
});

module.exports = mongoose.model('User', userSchema);
