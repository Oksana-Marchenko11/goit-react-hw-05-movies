import { useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { List } from 'components/List/List';
import SearchForm from 'components/SearchForm/SearchForm';
import { getSearchByKeyword } from 'api';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = MovieValue => {
    setLoading(true);

    getSearchByKeyword(MovieValue)
      .then(searchResults => {
        setSearchFilms(searchResults);
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
    </main>
  );
};

export default Movies;
