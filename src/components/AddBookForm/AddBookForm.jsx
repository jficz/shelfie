import { useState, useEffect } from 'react';
import './AddBookForm.css';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import {
  addAuthor,
  addBook,
  getAuthors,
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

  console.log('formData', formData);

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
    setFormData((values) => ({ ...values, [inputName]: newValue.value }));
  };

  const handleSelectChangeMulti = (newValue, inputName) => {
    const value = newValue.map((item) => item.value);
    setFormData((values) => ({ ...values, [inputName]: value }));
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
          classNamePrefix="select-inputs"
          placeholder=""
          isClearable
          isDisabled={isLoadingSelect}
          isLoading={isLoadingSelect}
          options={authors.map((author) => ({
            label: author.name,
            value: author.id,
          }))}
          onChange={(newValue) => handleSelectChange(newValue, 'authorId')}
          onCreateOption={(newValue) => handleCreate(newValue, 'authorId')}
          value={
            authors.find((author) => author.id === formData.authorId)
              ? {
                  label: authors.find((author) => author.id === formData.authorId).name,
                  value: authors.find((author) => author.id === formData.authorId).id,
                }
              : null
          }
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
          classNamePrefix="select-inputs"
          placeholder=""
          isMulti
          name="genres"
          options={genres.map((genre) => ({
            label: genre.genreName,
            value: genre.id,
          }))}
          onChange={(newValue) => handleSelectChangeMulti(newValue, 'genreId')}
        />
      </div>

      <div className="form-group">
        <label htmlFor="status">Stav</label>
        <Select
          classNamePrefix="select-inputs"
          placeholder=""
          isLoading={isLoadingSelect}
          isClearable
          name="status"
          options={statuses.map((status) => ({
            label: status.name,
            value: status.id,
          }))}
          onChange={(newValue) => {
            handleSelectChange(newValue, 'statusId');
          }}
          value={
            statuses.find((status) => status.id === formData.statusId)
              ? {
                  label: statuses.find((status) => status.id === formData.statusId).name,
                  value: statuses.find((status) => status.id === formData.statusId).id,
                }
              : null
          }
        />
      </div>
      <div className="form-buttons">
        {/* <button type="submit">Vyhledat ISBN</button> */}
        <button type="submit">Přidat knihu</button>
      </div>
    </form>
  );
};
