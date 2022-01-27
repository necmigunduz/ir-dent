'use strict'
import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

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

export default model('Books', BookSchema);