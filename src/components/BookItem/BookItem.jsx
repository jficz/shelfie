import './BookItem.css';

export const BookItem = ({ author, title }) => {
  return (
    <div className="book-item">
      <p>{author}</p>
      <p>{title}</p>
    </div>
  );
};
