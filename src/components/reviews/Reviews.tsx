import type { ReviewsDataAuthors } from '@types';

const Reviews = ({ reviews }: { reviews: ReviewsDataAuthors[] }) => {
  return (
    <ul className='flex flex-col gap-3'>
      {reviews.map((review) => {
        return (
          <li key={review.id} className='flex flex-col gap-1'>
            <h3>
              <b>Author: {review.author}</b>
            </h3>
            <span>
              <b>Review:</b> {review.content}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
