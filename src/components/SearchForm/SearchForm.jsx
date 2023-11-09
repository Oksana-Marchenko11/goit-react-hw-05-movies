import { useState } from 'react';
import { SearchInput, Button } from './SearchForm.styled';

const SearchForm = ({ func }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    const filmName = e.target.value;
    setValue(filmName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    func(value);
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
