import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
import Book from "./Book";
import fetchBooks from "../../api/fetchBooks";


function Books({ name, publisher, category, price }) {
  // const books = useSelector(state => state.books);
  const [allBooks, setAllBooks] = useState([]);
  
  useEffect(() => {
    const getData = async () => {    
      let data = await fetchBooks();
      setAllBooks(data.data);
    }
    getData()
  }, []);

  console.log(allBooks)
  return (
    <>
      <div>
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
