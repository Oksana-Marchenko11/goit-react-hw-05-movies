import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SearchInput, Button } from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ searchMovies }) => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';

  useEffect(() => {
    if (query === '' || query === value) return;
    setValue(query);
    searchMovies(query.toLowerCase());
  }, [query, value, searchMovies]);

  const handleChange = e => {
    const filmName = e.target.value;
    if (filmName === '') {
      return setSearchParams({});
    }
    setSearchParams({ search: filmName });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = searchParams.get('search');
    searchMovies(data.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="value"
        autoFocus
        value={query}
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
