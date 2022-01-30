import axios from 'axios';

const baseUrl = 'http://localhost:5000/books';

const createBook = (book) => axios.post(baseUrl, book);

const getBooks = () => axios.get(baseUrl);

const updateBook = (id, book) => axios.patch(`${baseUrl}/${id}`, book);

const deleteBook = (id) => axios.delete(`${baseUrl}/${id}`);

export { createBook, getBooks, updateBook, deleteBook };