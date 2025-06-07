import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './HomePage.css';
import { BookShelf } from '../../components/BookShelf/BookShelf';

export const HomePage = ({ books }) => {
  console.log('homepage', books);

  return (
    <>
      <Header />
      <div className="container">{<BookShelf books={books} />}</div>
      <Footer />
    </>
  );
};
