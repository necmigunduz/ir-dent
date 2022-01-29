import React from "react";

function Books({ name, publisher, category, price }) {
  return (
    <>
      <div>
          <h3>{name}</h3>
          <p>{publisher}</p>
          <p>{category}</p>
          <p>{price}</p>
      </div>
    </>
  );
}

export default Books;
