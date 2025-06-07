import './BookItem.css';
import { Link } from 'react-router-dom';

export const BookItem = ({ bookId, author, title }) => {
  return (
    <Link to={`/detail-knihy/${bookId}`}>
      <div className="book-item">
        <p>{author}</p>
        <p>{title}</p>
      </div>
    </Link>
  );
};
