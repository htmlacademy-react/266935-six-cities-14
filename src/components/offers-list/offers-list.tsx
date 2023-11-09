import { Offer } from '../../types/offer';
import { Cities } from '../../mocks/city';
import Map from '../map/map';

import OfferCard from '../offer-card/offer-card';
import SortType from '../sort-type/sort-type';

import {useState, Fragment} from 'react';
import {useAppSelector} from '../../hooks';

type OffersListProps= {
    offerCardType: 'mainScreen'|'favoritesScreen';
  }

function OffersList({offerCardType}: OffersListProps): JSX.Element {

  const [selectedOfferCardId, setSelectedOfferCardId] = useState<Offer['id'] | null>(null);

  const selectedCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  function handleMouseMove(offerId: Offer['id'] | null){
    setSelectedOfferCardId(offerId);
  }

  const offersInSelectedCity = offers.filter((offer) => offer.city.name === selectedCity);

  let cityForMap = Cities.find((city) => city.name === selectedCity);

  if(cityForMap === undefined) {
    cityForMap = Cities[0];
  }

  return (
    <div className="cities__places-container container">
      {offers.length === 0 ? (
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {selectedCity}</p>
          </div>
        </section>
      ) : (
        <Fragment>
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersInSelectedCity.length} places to stay in {selectedCity}</b>
            <SortType />
            <div className="cities__places-list places__list tabs__content">
              {offersInSelectedCity.map((offer) => (
                <OfferCard
                  offerCardType={offerCardType}
                  key={offer.id}
                  offer={offer}
                  handleMouseMove = {handleMouseMove}
                />))}
            </div>
          </section>
          <div className="cities__right-section">
            <Map city = {cityForMap} offers={offers} selectedOfferCardId = {selectedOfferCardId} mapType='cities'/>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default OffersList;
