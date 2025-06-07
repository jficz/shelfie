import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { BookDetail } from '../../Components/BookDetail/BookDetail';

import './HomePage.css';
import { AddBookForm } from '../../components/AddBookForm/AddBookForm';
import { BookShelf } from '../../components/BookShelf/BookShelf';

export const HomePage = ({ books }) => {
  console.log('homepage', books);

  return (
    <>
      <Header />
      <div className="container">{<BookDetail books={books} />}</div>
      <Footer />
    </>
  );
};
