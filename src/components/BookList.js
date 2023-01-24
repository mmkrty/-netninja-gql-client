import React, { useState } from "react";
import { GET_BOOKS } from "../queries/queries";
import { useQuery } from "@apollo/client";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  const [bookId, setBookId] = useState();

  if (data) console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li
            key={book.id}
            onClick={(e) => {
              setBookId(book.id);
            }}
          >
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={bookId} />
    </div>
  );
}

export default BookList;
