import React from "react";

function Book({ bookId, name, publisher, category, price }) {
  return (  
    <>
      <div>
          <h3>Book name: {name}</h3>
          <p>Record no: {bookId}</p>
          <p>Publisher: {publisher}</p>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
      </div>
    </>
  );
}

export default Book;
