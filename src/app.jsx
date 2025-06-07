import { LoadingPage } from './pages/LoadingPage/LoadingPage';
import { HomePage } from './pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

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
