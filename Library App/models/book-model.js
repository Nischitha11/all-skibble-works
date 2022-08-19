const mongoose = require('mongoose');

const bookSchema = require('../schemas/book-schema');

const bookSchema = require('../schemas/book-schema');

module.exports = mongoose.model('Book',bookSchema);
