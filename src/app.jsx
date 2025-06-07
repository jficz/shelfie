import { LoadingPage } from './pages/LoadingPage/LoadingPage';
import { HomePage } from './pages/HomePage/HomePage';
import { useEffect, useState } from 'react';

export const App = () => {
  const [books, setBooks] = useState([]);
  //const [,] = useState('');

  useEffect(() => {
    if (!books) setBooks([]);
    else {
      const fetchBooks = async () => {
        const response = await fetch(`api/books.json`);
        const json = await response.json();
        setTimeout(() => setBooks(json.data), 6000)
      };

      fetchBooks();
    }
  }, []);

  return (
    
      books ? <HomePage books={books} /> : <LoadingPage />
    
  );
};
