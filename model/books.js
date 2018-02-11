var mongoose = require('mongoose');
var BooksSchema = new mongoose.Schema({
    genre: String,
    most_popular: []
  });
module.exports = mongoose.model('Books', BooksSchema);