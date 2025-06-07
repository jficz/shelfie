import './BookDetail.css';
import imgPlaceholder from '../../../src/assets/bookPic-placeholder.jpg';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const BookDetail = () => {
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`/api/books.json`);
      const json = await response.json();
      setBooks(json.data);
    };

    fetchBooks();
  }, []);

  if (books.length <= 0) {
    return null;
  }
  const book = books.find((item) => item.id === bookId);
  return (
    <>
    
      <div className="book-detail" key={book.id}>
        <div className="book-cover">
          <img src={imgPlaceholder} alt="Název knihy" />
        </div>

        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <h2 className="book-author">{book.author}</h2>

          <div className="book-status-badge">
            <span>{book.status}</span>
          </div>

          <div className="book-description">
            <p>{book.description}</p>
          </div>

          <ul className="book-meta-info-list">
            <li>Žánr: {book.genreId}</li>
            <li>Počet stran: {book.pages}</li>
            <li>Rok vydání: {book.year_published}</li>
            <li>ISBN: {book.isbn}</li>
          </ul>
        </div>
      </div>
      
    </>
  );
};
