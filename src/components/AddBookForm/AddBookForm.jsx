import './AddBookForm.css';

export const AddBookForm = () => {
  return (
    <form className="add-book-form">
      <div className="form-group">
        <label htmlFor="isbn">ISBN</label>
        <input type="text" id="isbn" name="isbn" />
      </div>

      <div className="form-group">
        <label htmlFor="author">Autor</label>
        <input type="text" id="author" name="author" required />
      </div>

      <div className="form-group">
        <label htmlFor="title">Název knihy</label>
        <input type="text" id="title" name="title" required />
      </div>

      <div className="form-group">
        <label htmlFor="pages">Počet stran</label>
        <input type="number" id="pages" name="pages" min="1" />
      </div>

      <div className="form-group">
        <label htmlFor="genre">Žánr</label>
        <input type="text" id="genre" name="genre" />
      </div>

      <div className="form-group">
        <label htmlFor="status">Stav</label>
        <select id="status" name="status">
          <option value="unread">Chci číst</option>
          <option value="reading">Čtu</option>
          <option value="read">Přečteno</option>
        </select>
      </div>
      <div className="form-buttons">
        <button type="submit">Vyhledat ISBN</button>
        <button type="submit">Přidat knihu</button>
      </div>
    </form>
  );
};
