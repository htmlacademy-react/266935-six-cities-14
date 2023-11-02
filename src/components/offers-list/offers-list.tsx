import { Offer } from '../../types/offer';
import { Cities } from '../../mocks/city';
import Map from '../map/map';

import OfferCard from '../offer-card/offer-card';

import {useState, Fragment} from 'react';

type OffersListProps= {
    offerCardType: 'mainScreen'|'favoritesScreen';
    offerCardCount: number;
    offers: Offer[];
  }

function OffersList({offerCardType, offerCardCount, offers}: OffersListProps): JSX.Element {

  const [selectedOfferCardId, setSelectedOfferCardId] = useState<Offer['id'] | null>(null);

  function handleMouseMove(offerId: Offer['id'] | null){
    setSelectedOfferCardId(offerId);
  }

  return (
    <Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">312 places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
          Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.slice(0, offerCardCount).map((offer) => (
            <OfferCard
              offerCardType={offerCardType}
              key={offer.id}
              offer={offer}
              handleMouseMove = {handleMouseMove}
            />))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map city = {Cities[0]} offers={offers} selectedOfferCardId = {selectedOfferCardId}/>
      </div>
    </Fragment>

  );
}

export default OffersList;
