import { v4 as uuidv4 } from 'uuid';

export const getBooks = () => JSON.parse(localStorage.getItem('book'));

export const getAuthors = () => JSON.parse(localStorage.getItem('author'));

export const getBookStatus = () => JSON.parse(localStorage.getItem('bookStatus'));

export const getColors = () => JSON.parse(localStorage.getItem('colors'));

export const getGenres = () => JSON.parse(localStorage.getItem('genres'));

export const deleteBook = (id) => {
  const books = getBooks();
  const filteredBooks = books.filter((book) => book.id !== id);
  localStorage.setItem('book', JSON.stringify(filteredBooks));
  return books.length !== filteredBooks.length;
};

export const addBook = (newBook) => {
  const books = getBooks();
  const newBookWithId = { ...newBook, id: uuidv4() };
  const updatedBooks = [...books, newBookWithId];
  localStorage.setItem('book', JSON.stringify(updatedBooks));
};

export const addAuthor = (newAuthor) => {
  const authors = getAuthors();
  const newAuthorWithId = { ...newAuthor, id: uuidv4() };
  const updatedAuthors = [...authors, newAuthorWithId];
  localStorage.setItem('author', JSON.stringify(updatedAuthors));
  return newAuthorWithId.id;
};
