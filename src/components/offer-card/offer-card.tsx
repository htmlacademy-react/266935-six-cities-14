import { Offer } from '../../types/offer';

type OfferCardProps= {
  offerCardType: 'mainScreen'|'favoritesScreen';
  offer: Offer;
}

function OfferCard({offerCardType, offer}: OfferCardProps): JSX.Element {
  const options = {
    mainScreen: {
      className: 'cities',
      width: '260',
      hight: '200',
    },
    favoritesScreen: {
      className: 'favorites',
      width: '150',
      hight: '110',
    }
  };

  return (
    <article
      className={`${options[offerCardType].className}__card place-card`}
    >
      {offer.isFavorite ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}

      <div
        className={`${options[offerCardType].className}__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={`${options[offerCardType].width}`}
            height={`${options[offerCardType].hight}`}
            alt="Place image"
          />
        </a>
      </div>
      <div
        className={`${offerCardType === 'favoritesScreen' ? 'favorites__card-info' : ''} place-card__info`}
      >
        <div
          className="place-card__price-wrapper"
        >
          <div
            className="place-card__price"
          >
            <b
              className="place-card__price-value"
            >
              &euro;{offer.price}
            </b>
            <span
              className="place-card__price-text"
            >
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className={offer.isFavorite ?
              'place-card__bookmark-button place-card__bookmark-button--active button'
              : 'place-card__bookmark-button button'}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use
                xlinkHref="#icon-bookmark"
              >
              </use>
            </svg>
            <span
              className="visually-hidden"
            >
              To bookmarks
            </span>
          </button>
        </div>
        <div
          className="place-card__rating rating"
        >
          <div
            className="place-card__stars rating__stars"
          >
            <span
              style={{width: offer.rating}}
            >
            </span>
            <span
              className="visually-hidden"
            >
              Rating
            </span>
          </div>
        </div>
        <h2
          className="place-card__name"
        >
          <a
            href="#"
          >
            {offer.title}
          </a>
        </h2>
        <p
          className="place-card__type"
        >
          {offer.type[0].toUpperCase() + offer.type.slice(1)}
        </p>
      </div>
    </article>
  );
}

export default OfferCard;
