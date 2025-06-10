import './BookDetail.css';
import { getBooks, getAuthors, getBookStatus, getGenres } from '../../helpers/api-helpers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import picPlaceholder from '../../../public/assets/book_pic.png';

export const BookDetail = () => {
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchBooks = () => {
      const booksData = getBooks();
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchAuthors = () => {
      const authorsData = getAuthors();
      setAuthors(authorsData);
    };
    fetchAuthors();
  }, []);

  useEffect(() => {
    const fetchGenres = () => {
      const genresData = getGenres();
      setGenres(genresData);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchStatuses = async () => {
      const statusesData = getBookStatus();
      setStatuses(statusesData);
    };
    fetchStatuses();
  }, []);

  if (books.length <= 0) {
    return null;
  }

  const book = books.find((item) => item.id === bookId);
  const author = authors.find((item) => item.id === book.authorId);
  const status = statuses.find((item) => item.id === book.statusId);

  const bookGenreIds = book.genreId;
  const actualGenres = genres
    .filter((genreItem) => bookGenreIds.includes(genreItem.id))
    .map((genreItem) => genreItem.genreName)
    .join(', ');

  return (
    <>
      <div className="book-detail" key={book.id}>
        <div className="book-cover">
          <img src={picPlaceholder} alt="Přebal knihy" />
        </div>

        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <h2 className="book-author">{author.name}</h2>

          <div className="book-status-badge">
            <span>{status.name}</span>
          </div>

          <div className="book-description">
            <p>{book.description}</p>
          </div>

          <ul className="book-meta-info-list">
            <li>Žánr: {actualGenres}</li>
            <li>Počet stran: {book.pages}</li>
            <li>Rok vydání: {book.year_published}</li>
            <li>ISBN: {book.isbn}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
