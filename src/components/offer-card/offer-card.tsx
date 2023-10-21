type OfferCardProps= {
  offerCardType: 'mainScreen'|'favoritesScreen';
}

function OfferCard({offerCardType}: OfferCardProps): JSX.Element {
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
      <div
        className="place-card__mark"
      >
        <span>
          Premium
        </span>
      </div>
      <div
        className={`${options[offerCardType].className}__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
          <img
            className="place-card__image"
            src="img/apartment-01.jpg"
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
              &euro;120
            </b>
            <span
              className="place-card__price-text"
            >
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className="place-card__bookmark-button button"
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
              style={{width: '80%'}}
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
            Beautiful &amp; luxurious apartment at great location
          </a>
        </h2>
        <p
          className="place-card__type"
        >
          Apartment
        </p>
      </div>
    </article>
  );
}

export default OfferCard;
