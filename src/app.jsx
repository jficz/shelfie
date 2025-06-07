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
        const response = await fetch(`http://localhost:4000/api/books`);
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
