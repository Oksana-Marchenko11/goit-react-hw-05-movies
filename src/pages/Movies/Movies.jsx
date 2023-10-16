import { useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { List } from 'components/List/List';
import SearchForm from 'components/SearchForm/SearchForm';
import { getSearchByKeyword } from 'api';
import { Message } from './Movies.styled';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listEmpty, setListEmpty] = useState(false);

  const searchMovies = MovieValue => {
    setLoading(true);

    getSearchByKeyword(MovieValue)
      .then(searchResults => {
        setSearchFilms(searchResults);
        searchResults.length === 0 && setListEmpty(true);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <SearchForm searchMovies={searchMovies} />
      {loading && <Loader />}
      {searchFilms && <List films={searchFilms} />}
      {listEmpty && (
        <Message>Sorry, there aren't any film you are looking for.</Message>
      )}
    </main>
  );
};

export default Movies;
