import { LoadingPage } from './pages/LoadingPage/LoadingPage';
import { HomePage } from './pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { BookShelf } from './components/BookShelf/BookShelf';
import { AddBookForm } from './components/AddBookForm/AddBookForm';

export const App = () => {
 

 /*
      setTimeout(() => {}, 1000);
    



  return (<div>
    {books.length > 0 ? <HomePage books={books} /> : <LoadingPage />}
    
    </div>);*/
    return(
      <HomePage />
    )
};
