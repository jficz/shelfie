import './BookItem.css';
import { Link } from 'react-router-dom';

export const BookItem = ({ bookId, author, title }) => {
  const randomColor = () => {
    // Vygenerujeme r, g, b od 50 do 150 (středně tmavé barvy)
    const r = Math.floor(50 + Math.random() * 100);
    const g = Math.floor(50 + Math.random() * 100);
    const b = Math.floor(50 + Math.random() * 100);

    return `rgb(${r}, ${g}, ${b}, 1)`;
  };

  const baseHeight = 100;
  const extraPerChar = 2;
  const bookHeight = baseHeight + title.length * extraPerChar;

  return (
    <Link to={`/detail-knihy/${bookId}`} className="book-link">
      <div
        className="book-item"
        style={{
          backgroundColor: randomColor(),

          '--width': '43px',
          '--height': `${bookHeight}px`,
        }}
      >
        <div className="book-spine">
          <p className="book-item-title">{title}</p>
          <p className="book-item-author">{author}</p>
        </div>
      </div>
    </Link>
  );
};
