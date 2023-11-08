import { useState } from 'react';
import { SearchInput, Button } from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const [setSearchParams] = useSearchParams();

  const handleChange = e => {
    const filmName = e.target.value;
    setValue(filmName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ search: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="value"
        autoFocus
        // value={query}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
