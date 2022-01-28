'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  name: {
    type: String,
    required: 'Enter book name'
  },
  publisher: {
    type: String,
    required: [true, 'Enter book publisher name']
  },
  category: {
    type: [{
      type: String,
      enum: {
          values: ['Children', 'Novels', 'Selfhelp'],
          message: 'Books are classified as Children books, Novels books, and Selfhelp books.'
        }
    }],
    default: ['Unknown'],
    required: [true, 'Enter book category name']
  },
  price: {
      type: Number,
      required: [true, 'Enter book price'],
      default: 0
  }
});
module.exports = mongoose.model('Books', BookSchema);