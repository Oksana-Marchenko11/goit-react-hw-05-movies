import { useState, useEffect } from 'react';
import { getTrending } from 'api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrending()
      .then(trendingFilms => {
        console.log(trendingFilms);
        setFilms(trendingFilms);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <List films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
