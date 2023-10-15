import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchInput, Button } from './SearchForm.styled';

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
      <SearchInput
        type="text"
        name="value"
        autoFocus
        value={value}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

SearchForm.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default SearchForm;
