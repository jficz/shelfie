
import { BookDetail } from '../BookDetail/BookDetail';
import { BookItem } from '../BookItem/BookItem';
import './BookShelf.css';

export const BookShelf = ({ books }) => {
  /*console.log('bookshelf', books);*/

  const handleClick = () =>{
    <BookDetail/>
  }

  return (
    <div className="bookshelf-wrapper">
      <div className="bookshelf">
        {books.map((book) => {
          return <BookItem onClick={handleClick} key={book.id} author={book.author} title={book.title} />;
        })}
      </div>
      <div className="shelf"></div>
      <button className="button-menu">MENU</button>
    </div>
  );
};
