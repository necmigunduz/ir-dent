'use strict';
import { model } from 'mongoose';

Book = model('Books');
// Index
export function list_all_books(req, res) {
  Book.find({}, (err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
}
// Create
export function create_a_book(req, res) {
  let new_book = new Book(req.body);
  new_book.save((err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
}
// Show
export function read_a_book(req, res) {
  Book.findById(req.params.bookId, (err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
}
// Update
export function update_a_book(req, res) {
 Book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, (err, task) => {
    if (err)
      res.send(err);
    res.json(book);
  });
}
// Delete
export function delete_a_book(req, res) {
  Book.remove({
    _id: req.params.bookId
  }, (err, book) => {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
}