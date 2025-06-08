import { useState, useEffect, useId } from 'react';
import './AddBookForm.css';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

export const AddBookForm = () => {
  const createOption = (label) => {
    const id = uuidv4();
    return {
      label: label,
      // value: label.toLowerCase().replace(/\W/g, ''),
      value: id,
    };
  };

  const authorOptions = [
    createOption('Terry Pratchett'),
    createOption('J.R.R. Tolkien'),
    createOption('František Kotleta'),
  ];
  const genresOption = [createOption('Sci-fi'), createOption('Fantasy'), createOption('Román')];
  const statusOption = [
    createOption('Přečteno'),
    createOption('Chci číst'),
    createOption('Nepřečteno'),
  ];

  const [formData, setFormData] = useState({});
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

  const handleCreate = (inputValue, inputName) => {
    setIsLoadingSelect(true);
    const newOption = createOption(inputValue);
    setTimeout(() => {
      setIsLoadingSelect(false);
      setOptionsSelect((prev) => [...prev, newOption]);
      setValueSelect(newOption);
    }, 1000);
    handleSelectChange(newOption, inputName);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSelectChange = (newValue, inputName) => {
    setFormData((values) => ({ ...values, [inputName]: newValue }));
  };

  const handleSelectChangeMulti = (newValue, inputName) => {
    setFormData((values) => ({ ...values, [inputName]: [...newValue] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Odeslat informace o knize?`);
  };

  return (
    <form className="add-book-form">
      <div className="form-group">
        <label htmlFor="isbn">ISBN</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          onChange={handleChange}
          value={formData.isbn || ''}
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Autor</label>
        <CreatableSelect
          isClearable
          isDisabled={isLoadingSelect}
          isLoading={isLoadingSelect}
          options={optionsSelect}
          onChange={(newValue) => handleSelectChange(newValue, 'author')}
          onCreateOption={handleCreate}
          value={formData.author || ''}
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Název knihy</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={handleChange}
          value={formData.title || ''}
        />
      </div>

      <div className="form-group">
        <label htmlFor="pages">Počet stran</label>
        <input
          type="number"
          id="pages"
          name="pages"
          min="1"
          onChange={handleChange}
          value={formData.pages || ''}
        />
      </div>

      <div className="form-group">
        <label htmlFor="genre">Žánr</label>
        <Select
          isMulti
          name="genres"
          options={genresOption}
          onChange={(newValue) => handleSelectChangeMulti(newValue, 'genre')}
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
          onChange={(newValue) => {
            handleSelectChange(newValue, 'status');
          }}
          value={formData.status}
        />
      </div>
      <div className="form-buttons">
        <button type="submit">Vyhledat ISBN</button>
        <button type="submit">Přidat knihu</button>
      </div>
    </form>
  );
};
