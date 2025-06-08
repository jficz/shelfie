import { useState, useEffect, useId } from 'react';
import './AddBookForm.css';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import { addAuthor } from '../../helpers/api-helpers';

export const AddBookForm = () => {
  const [formData, setFormData] = useState({});
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [isLoadingSelect, setIsLoadingSelect] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`api/books.json`);
      const json = await response.json();
      setBooks(json.data);
    };
    fetchBooks();
  }, [books]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const response = await fetch(`api/authors.json`);
      const json = await response.json();
      setAuthors(json.data);
    };
    fetchAuthors();
  }, []);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(`api/genres.json`);
      const json = await response.json();
      setGenres(json.data);
    };
    fetchGenres();
  }, [genres]);

  useEffect(() => {
    const fetchStatuses = async () => {
      const response = await fetch(`api/bookStatus.json`);
      const json = await response.json();
      setStatuses(json.data);
    };
    fetchStatuses();
  }, [statuses]);

  const handleCreate = (inputValue, inputName) => {
    setIsLoadingSelect(true);
    setTimeout(() => {
      setIsLoadingSelect(false);
      console.log('input value:', inputValue);
      const authorId = addAuthor({
        name: inputValue,
        metaData: '',
      });
      handleSelectChange(
        {
          label: inputValue,
          value: authorId,
        },
        inputName,
      );
      setAuthors((prevState) => [...prevState, { label: inputValue, value: authorId }]);
    }, 1000);
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
    console.log('onSubmit: FormData', formData);
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
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
          options={authors.map((author) => ({
            label: author.name,
            value: author.id,
          }))}
          onChange={(newValue) => handleSelectChange(newValue, 'author')}
          onCreateOption={(newValue) => handleCreate(newValue, 'author')}
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
          options={genres.map((genre) => ({
            label: genre.genreName,
            value: genre.id,
          }))}
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
          options={statuses.map((status) => ({
            label: status.name,
            value: status.id,
          }))}
          onChange={(newValue) => {
            handleSelectChange(newValue, 'status');
          }}
          value={formData.status || ''}
        />
      </div>
      <div className="form-buttons">
        {/* <button type="submit">Vyhledat ISBN</button> */}
        <button type="submit">Přidat knihu</button>
      </div>
    </form>
  );
};
