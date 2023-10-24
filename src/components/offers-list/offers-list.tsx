import { Offer } from '../../types/offer';

import OfferCard from '../offer-card/offer-card';

import {useState} from 'react';

type OffersListProps= {
    offerCardType: 'mainScreen'|'favoritesScreen';
    offerCardCount: number;
    offers: Offer[];
  }

function OffersList({offerCardType, offerCardCount, offers}: OffersListProps): JSX.Element {

  const [selectedOfferCardId, setSelectedOfferCardId] = useState(0);

  console.log(selectedOfferCardId);

  function handleMouseEnter(offerId: number){
    setSelectedOfferCardId(offerId);
  }

  function handleMouseLeave(){
    setSelectedOfferCardId(0);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.slice(0, offerCardCount).map((offer) => (
        <OfferCard
          offerCardType={offerCardType}
          key={offer.id}
          offer={offer}
          handleMouseEnter = {handleMouseEnter}
          handleMouseLeave = {handleMouseLeave}
        />))}
    </div>
  );
}

export default OffersList;
