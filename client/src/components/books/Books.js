import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
import Book from "./Book";
import fetchBooks from "../../api/fetchBooks";


function Books() {
  // const books = useSelector(state => state.books);
  const [allBooks, setAllBooks] = useState([]);
  
  useEffect(() => {
    const getData = async () => {    
      let data = await fetchBooks();
      setAllBooks(data.data);
    }
    getData()
  }, [allBooks]);

  console.log(allBooks)
  return (
    <>
      <h2 className='mt-5'>Books Recorded</h2>
      <div className="mt-2">
      {allBooks.map((book)=>{
          return(
            <Book
              key={book._id}
              name={book.name}
              bookId={book._id}
              publisher={book.publisher}
              category={book.category[0]}
              price={book.price}
            />
          )
        })}
      </div>
    </>
  );
}

export default Books;
