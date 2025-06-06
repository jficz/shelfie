import { BookItem } from '../BookItem/BookItem';
import './BookShelf.css';

export const BookShelf = () => {
  return (
    <div className="bookshelf-wrapper">
      <div className="bookshelf">
        <BookItem width={`${25 * 1.2}px`} height={`${100 * 1.2}px`} />
        <BookItem width={`${20 * 1.2}px`} height={`${80 * 1.2}px`} />
        <BookItem width={`${18 * 1.2}px`} height={`${110 * 1.2}px`} />
        <BookItem width={`${23 * 1.2}px`} height={`${70 * 1.2}px`} />
        <BookItem width={`${25 * 1.2}px`} height={`${100 * 1.2}px`} />
        <BookItem width={`${20 * 1.2}px`} height={`${80 * 1.2}px`} />
        <BookItem width={`${18 * 1.2}px`} height={`${110 * 1.2}px`} />
        <BookItem width={`${23 * 1.2}px`} height={`${70 * 1.2}px`} />
      </div>
      <div className="shelf"></div>
      <button className="button-menu">MENU</button>
    </div>
  );
};
