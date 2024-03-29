import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCredits } from 'api';
import { Loader } from 'components/Loader/Loader';
import { CastList, ActorName } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getCredits(movieId)
      .then(actors => {
        setActors(actors);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <CastList>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />
            <ActorName>{name}</ActorName>
            <p>Character: {character}</p>
          </li>
        ))}
      </CastList>
    </div>
  );
};
export default Cast;
