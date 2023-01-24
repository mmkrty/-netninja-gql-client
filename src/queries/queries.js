import { gql } from "@apollo/client";

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const GET_BOOK = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { GET_AUTHORS, GET_BOOKS, ADD_BOOK, GET_BOOK };
