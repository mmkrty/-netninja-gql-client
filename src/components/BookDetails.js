import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  if (!bookId) return <p>Please select a book</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { book } = data;

  return (
    <div>
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this author</p>
      <ul className="other-books">
        {book.author.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
