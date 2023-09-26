import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetch } from 'src/services';
import type { MergeReviewsData, ReviewsDataAuthors } from '@types';
import Reviews from '../components/reviews/Reviews';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<ReviewsDataAuthors[] | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch({ type: 'reviews', movie_id: movieId });
      const { results } = response as MergeReviewsData;
      setReviews(results);
    };
    fetchReviews();
  }, []);
  return (
    <>
      {reviews && reviews.length ? <Reviews reviews={reviews} /> : <span>Not found reviews.</span>}
    </>
  );
};

export default ReviewsPage;
