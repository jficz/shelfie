import { LoadingPage } from './pages/LoadingPage/LoadingPage';
import { HomePage } from './pages/HomePage/HomePage';
import { useEffect, useState } from 'react';

export const App = () => {
  const [books, setBooks] = useState([]);
  //const [,] = useState('');

  useEffect(() => {
    if (!books) setItems([]);
    else {
      const fetchBooks = async () => {
        const response = await fetch(`api/books.json`);
        const json = await response.json();
        setBooks(json.data);
      };

      fetchBooks();
    }
  }, []);

  return (
    <>
      <HomePage books={books} />
    </>
  );
};
