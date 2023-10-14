import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchMovies }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        autoFocus
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default SearchForm;
