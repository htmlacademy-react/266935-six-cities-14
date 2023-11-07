import { Helmet } from 'react-helmet-async';

import {useAppDispatch, useAppSelector} from '../../hooks';

import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';

import { Offer } from '../../types/offer';

type MainScreenProps= {
  offerCardsCount: number;
  offers: Offer[];
}

function MainScreen({offerCardsCount, offers}: MainScreenProps): JSX.Element {
  const city = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6  cities. Main</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList selectedCity={city}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {offers.length === 0 ? (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
            ) : (
              <OffersList offerCardCount = {offerCardsCount} offers = {offers} offerCardType='mainScreen'/>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
