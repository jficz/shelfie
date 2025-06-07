import { BookItem } from '../BookItem/BookItem';
import { useEffect } from 'react';
import { useState } from 'react';
import './BookShelf.css';

export const BookShelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log('run fetch books:');
    const fetchBooks = async () => {
      const response = await fetch(`api/books.json`);
      const json = await response.json();
      setBooks(json.data);
    };

    fetchBooks();

    console.log('fetch books:');
  }, []);
  return (
    <div className="bookshelf-wrapper">
      <div className="bookshelf">
        {books.map((book) => {
          return (
            <BookItem
              key={book.id}
              bookId={book.id}
              author={book.author}
              title={book.title}
            />
          );
        })}
        
      </div>
      <div className="shelf"></div>
      <button className="button-menu">MENU</button>
    </div>
  );
};
