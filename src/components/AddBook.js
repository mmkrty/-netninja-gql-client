import React, { useState } from "react";
import { GET_AUTHORS, GET_BOOKS, ADD_BOOK } from "../queries/queries";
import { useQuery, useMutation } from "@apollo/client";

function AddBook() {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [form, setForm] = useState({
    name: "",
    genre: "",
    authorId: "",
  });
  const [addBook, { addData, addLoading, addError }] = useMutation(ADD_BOOK);

  const submitForm = function (e) {
    e.preventDefault();
    addBook({
      variables: {
        name: form.name,
        genre: form.genre,
        authorId: form.authorId,
      },
      refetchQueries: [{ query: GET_BOOKS }],
    });
    console.log(form);
  };

  if (data) console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if (addData) console.log(addData);
  if (addLoading) return <p>Loading...</p>;
  if (addError) return <p>Error : {error.message}</p>;

  return (
    <form id="add-book" onSubmit={submitForm.bind(this)}>
      <div className="field">
        <label htmlFor="">Book name:</label>
        <input
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div className="field">
        <label htmlFor="">Genre:</label>
        <input
          type="text"
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
        />
      </div>

      <div className="field">
        <label htmlFor="">Author:</label>
        <select
          onChange={(e) => setForm({ ...form, authorId: e.target.value })}
        >
          <option value="">Select author</option>
          {data.authors.map((author, idx) => (
            <option key={idx} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
