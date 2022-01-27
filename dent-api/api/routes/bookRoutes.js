'use strict';
export default (app) => {
    const books = require('../controllers/bookController');

    app.route('/books')
    .get(books.list_all_books)
    .post(books.create_a_book);

    app.route('/books/:bookId')
    .get(books.read_a_book)
    .put(books.update_a_book)
    .delete(books.delete_a_book);
}