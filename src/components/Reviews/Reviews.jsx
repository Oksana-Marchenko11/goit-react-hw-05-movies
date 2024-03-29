import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'api';
import { Loader } from 'components/Loader/Loader';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
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
          <ReviewsList>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ReviewsList>
        </div>
      )}
      {reviews.length === 0 && (
        <p>Sorry, there aren't any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
