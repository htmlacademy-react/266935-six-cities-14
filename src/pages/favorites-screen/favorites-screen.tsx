import { Helmet } from 'react-helmet-async';

import FooterLogo from '../../components/footer-logo/footer-logo';
import Header from '../../components/header/header';
import OfferCard from '../../components/offer-card/offer-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fillOffers } from '../../store/action';


function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  dispatch(fillOffers());
  const offers = useAppSelector((state) => state.offers);

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities: string[] = [];

  favoriteOffers.forEach((offer) => cities.includes(offer.city.name) ? '' : cities.push(offer.city.name));

  return (
    <div className="page">
      <Helmet>
        <title>6  cities. Favorites</title>
      </Helmet>

      <Header />

      {favoriteOffers.length === 0 ? (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favoriteOffers.filter((offer) => offer.city.name === city)
                        .map((offer) => (
                          <OfferCard offer={offer} offerCardType='favoritesScreen' key={offer.id}/>
                        ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      )}

      <FooterLogo />
    </div>
  );
}

export default FavoritesScreen;
