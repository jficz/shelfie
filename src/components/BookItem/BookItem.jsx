import './BookItem.css';

export const BookItem = ({ width, height }) => {
  return (
    <div className="book-item" style={{ width, height }}>
      <p>Autor</p>
      <p>Titul</p>
    </div>
  );
};
