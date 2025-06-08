import { useState, useEffect } from 'react';
import './AddBookForm.css';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

const createOption = (label) => ({
  label: label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const authorOptions = [createOption('One'), createOption('Two'), createOption('Three')];
const genresOption = [createOption('Sci-fi'), createOption('Fantasy'), createOption('Román')];
const statusOption = [
  createOption('Přečteno'),
  createOption('Chci číst'),
  createOption('Nepřečteno'),
];

export const AddBookForm = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [isLoadingSelect, setIsLoadingSelect] = useState(false);
  const [optionsSelect, setOptionsSelect] = useState(authorOptions);
  const [valueSelect, setValueSelect] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`api/books.json`);
      const json = await response.json();
      setBooks(json.data);
    };
    fetchBooks();

    const fetchAuthors = async () => {
      const response = await fetch(`api/authors.json`);
      const json = await response.json();
      setAuthors(json.data);
    };
    fetchAuthors();

    const fetchGenres = async () => {
      const response = await fetch(`api/genres.json`);
      const json = await response.json();
      setGenres(json.data);
    };
    fetchGenres();

    const fetchStatuses = async () => {
      const response = await fetch(`api/bookStatus.json`);
      const json = await response.json();
      setStatuses(json.data);
    };
    fetchStatuses();
  }, []);

  const handleCreate = (inputValue) => {
    setIsLoadingSelect(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoadingSelect(false);
      setOptionsSelect((prev) => [...prev, newOption]);
      setValueSelect(newOption);
    }, 1000);
  };

  return (
    <form className="add-book-form">
      <div className="form-group">
        <label htmlFor="isbn">ISBN</label>
        <input type="text" id="isbn" name="isbn" />
      </div>

      <div className="form-group">
        <label htmlFor="author">Autor</label>
        <CreatableSelect
          isClearable
          isDisabled={isLoadingSelect}
          isLoading={isLoadingSelect}
          options={optionsSelect}
          onChange={(newValue) => setValueSelect(newValue)}
          onCreateOption={handleCreate}
          value={valueSelect}
        />
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
        <Select
          isMulti
          name="genres"
          options={genresOption}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      <div className="form-group">
        <label htmlFor="status">Stav</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isLoading={isLoadingSelect}
          isClearable
          name="status"
          options={statusOption}
        />
      </div>
      <div className="form-buttons">
        <button type="submit">Vyhledat ISBN</button>
        <button type="submit">Přidat knihu</button>
      </div>
    </form>
  );
};
