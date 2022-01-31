import axios from "axios";
import React from "react";

function Book({ bookId, name, publisher, category, price }) {
  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/books/${id}`)
  };

  return (  
    <>
      <div>
          <h3>Book name: {name}</h3>
          <p>Record no: {bookId}</p>
          <p>Publisher: {publisher}</p>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
          <button onClick={() => handleDelete(bookId)}>Delete</button>
      </div>
    </>
  );
}

export default Book;
