import { BookItem } from '../BookItem/BookItem';
import { useEffect } from 'react';
import { useState } from 'react';
import './BookShelf.css';

export const BookShelf = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`api/books.json`);
      const json = await response.json();
      setBooks(json.data);
    };
    fetchBooks();

    const fetchAuthors = async () => {
      const response = await fetch(`api/authors.json`);
      const json = await response.json();
      setAuthors(json.data);
    };
    fetchAuthors();
  }, []);

  const combineArrays = (books, authors) => {
    return books.map((book) => {
      const author = authors.find((a) => a.id === book.authorId);
      return {
        id: book.id,
        title: book.title,
        author: author ? author.name : 'Neznámý autor',
      };
    });
  };

  const combined = combineArrays(books, authors);

  return !books.length || !authors.length ? null : (
    <div className="bookshelf-wrapper">
      <div className="bookshelf">
        {combined.map((book) => (
          <BookItem key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="shelf"></div>
      <button className="button-menu">MENU</button>
    </div>
  );
};
