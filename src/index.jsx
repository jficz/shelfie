import { createRoot } from 'react-dom/client';
import './global.css';
import { App } from './app';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { BookDetail } from './components/BookDetail/BookDetail';
import { BookShelf } from './components/BookShelf/BookShelf';
import { AddBookForm } from './components/AddBookForm/AddBookForm';
import { ErrorPage } from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <BookShelf />,
      },
      {
        path: 'detail-knihy/:bookId',
        element: <BookDetail />,
      },
      {
        path: 'pridat-knihu',
        element: <AddBookForm />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(<RouterProvider router={router} />);
