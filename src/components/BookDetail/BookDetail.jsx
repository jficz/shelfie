import './BookDetail.css';
import imgPlaceholder from '../../../src/assets/bookPic-placeholder.jpg';

export const BookDetail = () => {
  return (
    <div class="book-detail">
      <div class="book-cover">
        <img src={imgPlaceholder} alt="Název knihy" />
      </div>

      <div class="book-info">
        <h1 class="book-title">Název knihy</h1>
        <p class="book-author">Autor</p>

        <div class="book-status-badge">
          <span>Přečteno</span>
        </div>

        <div class="book-description">
          <p>Detailní popis nebo anotace knihy...</p>
        </div>

        <ul class="book-meta-info-list">
          <li>Žánr: Román</li>
          <li>Počet stran: 312</li>
          <li>Rok vydání: 2020</li>
          <li>ISBN: 978-3-16-148410-0</li>
        </ul>
      </div>
    </div>
  );
};
