import React, { useEffect } from 'react';
import FormBook from './components/Form';
import { useDispatch } from 'react-redux';
import { getBooks } from './_actions/books';
import Books from './components/books/Books';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks);
  }, [dispatch]);
  
  return (
    <div style={{textAlign:'center', width:'50%', margin:'0 auto'}}>
      <FormBook />
      <Books />
    </div>
  );
}

export default App;
