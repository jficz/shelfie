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
        {reversed.slice(0, 7).map((book) => (
          <BookItem key={book.id} bookId={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="shelf"></div>

      <div className="bookshelf">
        {reversed.slice(8, 15).map((book) => (
          <BookItem key={book.id} bookId={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="shelf"></div>
    </div>
  );
};
