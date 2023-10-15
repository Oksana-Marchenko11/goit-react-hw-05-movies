import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'api';
import { Loader } from 'components/Loader/Loader';
// import { List } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getReviews(movieId)
      .then(reviews => {
        setReviews(reviews);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <p>Sorry, there aren't any reviews for this movie</p>
      )}
    </>
  );
};
