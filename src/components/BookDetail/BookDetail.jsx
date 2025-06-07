import './BookDetail.css';
import imgPlaceholder from '../../../src/assets/bookPic-placeholder.jpg';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const BookDetail = () => {
  console.log('run bookdetail');
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log('run fetch books:');
    const fetchBooks = async () => {
      const response = await fetch(`api/books.json`);
      console.log("received response", response)
      const json = await response.json();
      setBooks(json.data);
      console.log('json', json);
    };

    fetchBooks();
  }, []);

  console.log('books:', books);
  return (
    <p>BookDetail page</p>
    /*
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
    */
  );
};
