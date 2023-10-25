import { Setting } from '../../const';
import { convertRating, formatDate } from '../../utils';

import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

import PostReviewForm from '../post-review-form/post-review-form';

type OfferCardProps= {
    offer: Offer;
    offerReviews: Review[];
  }

function OfferFullCard({offer, offerReviews}: OfferCardProps): JSX.Element {
  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offer.images.slice(0, Setting.FullOfferPhotosCount).map((image, index) => (
            <div className="offer__image-wrapper" key={index}>
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {offer.isPremium ?
            <div className="offer__mark">
              <span>Premium</span>
            </div> : ''}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {offer.title}
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: convertRating(offer.rating) }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {offer.type[0].toUpperCase() + offer.type.slice(1)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
          Max {offer.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offer.goods.map((good, index)=>(
                <li className="offer__inside-item" key={index}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                {offer.host.name}
              </span>
              {offer.host.isPro ?
                <span className="offer__user-status">
              Pro
                </span> : ''}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {offer.description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
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
            <PostReviewForm />
          </section>
        </div>
      </div>
      <section className="offer__map map"></section>
    </section>
  );
}

export default OfferFullCard;
