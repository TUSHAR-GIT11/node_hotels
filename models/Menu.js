const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  is_drink: {
    type: Boolean,
    default: false
  },
  ingredients: {
    type: [String],  // Changed to an array of strings
    default: []
  }
});

const Menu = mongoose.model('Menu', menuSchema);  // Use the correct schema name

module.exports = Menu;
