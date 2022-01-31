import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Book({ bookId, name, publisher, category, price }) {
  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/books/${id}`)
  };

  return (  
    <>
      <Card className="mt-2">
        <Card.Body>
          <Card.Header>Book Card</Card.Header>
          <Card.Title><strong>Book Name:</strong> {name.charAt(0).toUpperCase() + name.slice(1)}</Card.Title>
          <Card.Text>Publisher: {publisher}</Card.Text>
          <Card.Text>Category: {category}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
          <Card.Footer>Record no: {bookId}</Card.Footer>
        </Card.Body>
        <Button variant='danger' className='mt-2' onClick={() => handleDelete(bookId)}>Delete this book!</Button>
      </Card>
    </>
  );
}

export default Book;
