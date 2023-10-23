import { Offer } from '../../types/offer';

import OfferCard from '../offer-card/offer-card';

type OffersListProps= {
    offerCardType: 'mainScreen'|'favoritesScreen';
    offerCardCount: number;
    offers: Offer[];
  }

function OffersList({offerCardType, offerCardCount, offers}: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.slice(0, offerCardCount).map((offer) => <OfferCard offerCardType={offerCardType} key={offer.id} offer={offer}/>)}
    </div>
  );
}

export default OffersList;
