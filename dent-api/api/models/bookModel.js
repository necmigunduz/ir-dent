'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: 'Enter book name'
    },
    publisher: {
        type: String,
        required: 'Enter publisher name'
    },
    category: {
        type: String,
        enum: ['Children', 'Novels', 'Selfhelp'],
        required: 'Select a category',
        default: ['Children']
    },
    price: {
        type: Number,
        required: 'Enter book price',
        default: 0
    }
})

module.exports = mongoose.model('Books', BookSchema);