import './BookDetail.css';
import imgPlaceholder from '../../../src/assets/bookPic-placeholder.jpg';

export const BookDetail = () => {
  return (
    <div className="book-detail">
      <div className="book-cover">
        <img src={imgPlaceholder} alt="Název knihy" />
      </div>

      <div className="book-info">
        <h1 className="book-title">Název knihy</h1>
        <h2 className="book-author">Autor</h2>

        <div className="book-status-badge">
          <span>Přečteno</span>
        </div>

        <div className="book-description">
          <p>
            Detailní popis nebo anotace knihy... Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Voluptas, unde magnam officiis eveniet dolorem culpa eaque repellendus nobis
            provident possimus, enim explicabo corrupti laboriosam libero reprehenderit quas illum
            saepe itaque!
          </p>
        </div>

        <ul className="book-meta-info-list">
          <li>Žánr: Román</li>
          <li>Počet stran: 312</li>
          <li>Rok vydání: 2020</li>
          <li>ISBN: 978-3-16-148410-0</li>
        </ul>
      </div>
    </div>
  );
};
