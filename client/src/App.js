import React, { useEffect } from 'react';
import Form from './components/Form';
import TopNav from './components/topNav';
import { useDispatch } from 'react-redux';
import { getBooks } from './_actions/books';
import Books from './components/books/Books';
import './assets/app.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks);
  }, [dispatch]);
  
  return (
    <div className='App'>
      <TopNav />
      <Form />
      <Books />
    </div>
  );
}

export default App;
