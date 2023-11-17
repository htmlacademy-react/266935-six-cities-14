import { AuthorizationStatus, Setting } from '../../const';
import { convertRating } from '../../utils';

import {Fragment} from 'react';

import { FullOffer } from '../../types/offer';

import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';

import PostReviewForm from '../post-review-form/post-review-form';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';

type OfferFullCardProps = {
  fullOffer: FullOffer;
  reviews: Review[];
}

function OfferFullCard({fullOffer, reviews}: OfferFullCardProps): JSX.Element {
  const authorizationStatus: AuthorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <Fragment>
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {fullOffer.images.slice(0, Setting.FullOfferPhotosCount).map((image) => (
            <div className="offer__image-wrapper" key={image}>
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {fullOffer.isPremium ?
            <div className="offer__mark">
              <span>Premium</span>
            </div> : ''}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {fullOffer.title}
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
              <span style={{ width: convertRating(fullOffer.rating) }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{fullOffer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {fullOffer.type[0].toUpperCase() + fullOffer.type.slice(1)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {fullOffer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
          Max {fullOffer.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{fullOffer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {fullOffer.goods.map((good)=>(
                <li className="offer__inside-item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={fullOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                {fullOffer.host.name}
              </span>
              {fullOffer.host.isPro ?
                <span className="offer__user-status">
              Pro
                </span> : ''}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {fullOffer.description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
            <OfferReviewsList offerReviews={reviews}/>
            {authorizationStatus === AuthorizationStatus.Auth ? <PostReviewForm/> : ''}
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default OfferFullCard;
