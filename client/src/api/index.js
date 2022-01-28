import axios from 'axios';
import baseUrl from './baseUrl';

const createBook = (book) => axios.post(baseUrl, book);

const getBooks = () => axios.get(baseUrl);

const showBook = (id) => axios.get(`${baseUrl}/${id}`);

const updateBook = (id, book) => axios.patch(`${baseUrl}/${id}`);

const deleteBook = (id) => axios.delete(`${baseUrl}/${id}`);

export { createBook, getBooks, showBook, updateBook, deleteBook };