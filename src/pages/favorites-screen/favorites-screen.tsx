import { Helmet } from 'react-helmet-async';

import { Offer } from '../../types/offer';

import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';

type FavoriteScreenProps = {
  offers: Offer[];
}

type GroupedOffers = {
  city: string;
  offers: Offer[];
}

function FavoritesScreen({offers}: FavoriteScreenProps): JSX.Element {

  const sortedFavoriteOffers = offers.filter((offer) => offer.isFavorite)
    ?.sort((a, b) => a.city > b.city ? 1 : -1);

  return (
    <div className="page">
      <Helmet>
        <title>6  cities. Favorites</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList offerCardCount={sortedFavoriteOffers.length} offers={sortedFavoriteOffers} offerCardType='favoritesScreen'/>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
