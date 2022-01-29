import React, { useEffect } from 'react';
import Form from './components/Form';
import { useDispatch } from 'react-redux';
import { getBooks } from './_actions/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks);
  }, [dispatch]);
  
  return (
    <>
      <Form />
    </>
  );
}

export default App;
