import { BookItem } from '../BookItem/BookItem';
import './BookShelf.css';

export const BookShelf = ({ books }) => {
  return (
    <div className="bookshelf-wrapper">
      <div className="bookshelf">
        {books.map((book) => {
          return (
            <BookItem key={book.id} bookId={book.id} author={book.author} title={book.title} />
          );
        })}
      </div>
      <div className="shelf"></div>
      <button className="button-menu">MENU</button>
    </div>
  );
};
