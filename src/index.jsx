import { createRoot } from 'react-dom/client';
import './global.css';
import { App } from './App';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { BookDetail } from './Components/BookDetail/BookDetail';
import { HomePage } from './pages/HomePage/HomePage';
import { LoadingPage } from './pages/LoadingPage/LoadingPage';
import { AddBookForm } from './components/AddBookForm/AddBookForm';

createRoot(document.querySelector('#app')).render(<App />);


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      
      {
        path: '/',
        element: <HomePage />,
        /*loader: <LoadingPage />*/
      },
      {
        path: '/detail-knihy/:id',
        element: <BookDetail />,
      },
      {
        path: '/pridat-knihu',
        element: <AddBookForm />
      }
    ],
  },
]);

createRoot(document.querySelector('#app')).render(<RouterProvider router={router} />);
