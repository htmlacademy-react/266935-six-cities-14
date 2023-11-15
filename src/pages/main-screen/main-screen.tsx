import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';

function MainScreen(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6  cities. Main</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <OffersList offerCardType='mainScreen' />
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
