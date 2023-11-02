import { Review } from '../../types/review';

import { convertRating, formatDate } from '../../utils';

type ReviewsListProps = {
    offerReviews: Review[];
}

function ReviewsList ({offerReviews} : ReviewsListProps) : JSX.Element {
  return (
    <ul className="reviews__list">
      {offerReviews.map((offerReview) => (
        <li className="reviews__item" key={offerReview.user.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={offerReview.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {offerReview.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating" >
              <div className="reviews__stars rating__stars">
                <span style={{ width: convertRating(offerReview.rating) }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {offerReview.comment}
            </p><time className="reviews__time" dateTime={offerReview.date}>{formatDate(offerReview.date)}</time>


          </div>
        </li>
      ))}

    </ul>
  );
}

export default ReviewsList;
