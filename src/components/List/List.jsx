import { useLocation } from 'react-router-dom';
import { LinkMovies, MovieItem } from './List.styled';

export const List = ({ films }) => {
  const location = useLocation();

  return (
    <dl>
      {films.map(film => (
        <MovieItem key={film.id}>
          <LinkMovies to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </LinkMovies>
        </MovieItem>
      ))}
    </dl>
  );
};
