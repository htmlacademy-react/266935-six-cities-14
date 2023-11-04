import { Review } from '../../types/review';
import OfferReview from '../offer-review/offer-review';

type OfferReviewsListProps = {
    offerReviews: Review[];
}

function OfferReviewsList ({offerReviews} : OfferReviewsListProps) : JSX.Element {
  return (
    <ul className="reviews__list">
      {offerReviews.map((offerReview) => (
        <OfferReview offerReview={offerReview} key={offerReview.id}/>
      ))}

    </ul>
  );
}

export default OfferReviewsList;
