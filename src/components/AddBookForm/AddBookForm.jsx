import { useState, useEffect, useId } from 'react';
import './AddBookForm.css';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import {
  addAuthor,
  addBook,
  getAuthors,
  getBooks,
  getBookStatus,
  getGenres,
} from '../../helpers/api-helpers';
import { useNavigate } from 'react-router-dom';

export const AddBookForm = () => {
  const [formData, setFormData] = useState({});
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [isLoadingSelect, setIsLoadingSelect] = useState(false);
  const [authorsVersion, setAuthorsVersion] = useState(0);

  useEffect(() => {
    const fetchAuthors = () => {
      const authorsData = getAuthors();
      setAuthors(authorsData);
    };
    fetchAuthors();
  }, [authorsVersion]);

  useEffect(() => {
    const fetchGenres = () => {
      const genresData = getGenres();
      setGenres(genresData);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchStatuses = async () => {
      const statusesData = getBookStatus();
      setStatuses(statusesData);
    };
    fetchStatuses();
  }, []);

  const handleCreate = (inputValue, inputName) => {
    setIsLoadingSelect(true);
    setTimeout(() => {
      setIsLoadingSelect(false);
      console.log('input value:', inputValue);
      const authorId = addAuthor({
        name: inputValue,
        metaData: '',
      });
      setAuthorsVersion((prevState) => prevState + 1);
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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(formData);
    navigate('/');
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
