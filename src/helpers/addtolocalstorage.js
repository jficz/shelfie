import books from '../../public/api/books.json';
import authors from '../../public/api/authors.json';
import bookStatus from '../../public/api/bookStatus.json';
import colors from '../../public/api/colors.json';
import genres from '../../public/api/genres.json';

export const SaveFilesToLocalStorage = () => {
  localStorage.setItem('book', JSON.stringify(books.data));
  localStorage.setItem('author', JSON.stringify(authors.data));
  localStorage.setItem('bookStatus', JSON.stringify(bookStatus.data));
  localStorage.setItem('colors', JSON.stringify(colors.data));
  localStorage.setItem('genres', JSON.stringify(genres.data));
};
