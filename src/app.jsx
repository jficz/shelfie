import { LoadingPage } from './pages/LoadingPage/LoadingPage';
import { HomePage } from './pages/HomePage/HomePage';
import { useEffect, useState } from 'react';

export const App = () => {
  const [books, setBooks] = useState([]);
  //const [,] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`api/books.json`);
      const json = await response.json();
      setTimeout(() => {
        setBooks(json.data);
      }, 3000);
    };

    fetchBooks();
  }, []);

  return books.length > 0 ? <HomePage books={books} /> : <LoadingPage />;
};
