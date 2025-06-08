import { LoadingPage } from './pages/LoadingPage/LoadingPage';
import { HomePage } from './pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import { SaveFilesToLocalStorage } from './helpers/addtolocalstorage';

export const App = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    SaveFilesToLocalStorage();
  }, []);

  setTimeout(() => setShowHomePage(true), 3000);

  return <>{showHomePage ? <HomePage /> : <LoadingPage />}</>;
};
