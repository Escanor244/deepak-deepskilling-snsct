import React from 'react';

const BookDetails = ({ books }) => {
  if (!books || books.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </li>
      ))}
    </ul>
  );
};

export default BookDetails;
