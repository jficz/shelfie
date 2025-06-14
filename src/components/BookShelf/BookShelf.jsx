import { BookItem } from '../BookItem/BookItem';
import { useEffect } from 'react';
import { useState } from 'react';
import './BookShelf.css';
import { getBooks, getAuthors } from '../../helpers/api-helpers';

export const BookShelf = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchBooks = () => {
      setBooks(getBooks());
    };
    fetchBooks();

    const fetchAuthors = () => {
      setAuthors(getAuthors);
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
  const reversed = combined.slice().reverse();

  return !books.length || !authors.length ? null : (
    <div className="bookshelf-wrapper">
      <div className="bookshelf">
        {reversed.slice(0, 8).map((book) => (
          <BookItem key={book.id} bookId={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="shelf"></div>

      <div className="bookshelf">
        {reversed.slice(9, 17).map((book) => (
          <BookItem key={book.id} bookId={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="shelf"></div>

      <div className="bookshelf">
        {reversed.slice(18, 26).map((book) => (
          <BookItem key={book.id} bookId={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="shelf"></div>

      <div className="bookshelf">
        {reversed.slice(27, 35).map((book) => (
          <BookItem key={book.id} bookId={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="shelf"></div>

      <div className="bookshelf">
        {reversed.slice(36, 44).map((book) => (
          <BookItem key={book.id} bookId={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="shelf"></div>

      <div className="bookshelf">
        {reversed.slice(45, 53).map((book) => (
          <BookItem key={book.id} bookId={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="shelf"></div>
    </div>
  );
};
