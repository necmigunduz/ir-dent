import * as api from "../api/index";

const createBook = (book) => async (dispatch) => {
  const { data } = await api.createBook(book);
  dispatch({ type: "POST", payload: data });
};

const getBooks = () => async (dispatch) => {
  const { data } = await api.getBooks();
  dispatch({ type: "GET", payload: data });
};

const updateBook = (id, book) => async (dispatch) => {
  const { data } = await api.updateBook(id, book);
  dispatch({ type: "UPDATE", payload: id });    
};

const deleteBook = (id) => async (dispatch) => {
  const { data } = await api.deleteBook(id);
  dispatch({ type: "DELETE", payload: data });
};

export { createBook, getBooks, updateBook, deleteBook };
