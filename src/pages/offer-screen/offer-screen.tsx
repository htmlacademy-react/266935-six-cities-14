import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import {useState} from 'react';

import Header from '../../components/header/header';
import OfferFullCard from '../../components/offer-full-card/offer-full-card';
import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';

import NotFoundScreen from '../not-found-screen/not-found-screen';

import { FullOffer, Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';

type OfferScreenProps = {
  reviews: Review[];
  onCommentPost: (rating: number, text: string) => void;
}

function OfferScreen({ reviews, onCommentPost}: OfferScreenProps): JSX.Element{

  const [selectedOfferCardId, setSelectedOfferCardId] = useState<FullOffer['id'] | null>(null);

  const offers = useAppSelector((state) => state.offers);
  function handleMouseMove(offerId: FullOffer['id'] | null){
    setSelectedOfferCardId(offerId);
  }

  const params = useParams();
  let offerStringId: string = '';

  if (params.offerId !== undefined){
    offerStringId = params.offerId;
  }

  const selectedOffer = offers.find((offersItem) => offersItem.id === offerStringId);

  if (selectedOffer === undefined) {
    return (
      <NotFoundScreen />
    );
  }
  const nearOffers: Offer[] = offers.filter((offer) => offer.id !== selectedOffer.id);
  const offerReviews = reviews.filter((review) => review.id === selectedOffer.id);

  return (
    <div className="page">
      <Helmet>
        <title>6  cities. Offer</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferFullCard offer={selectedOffer} offerReviews={offerReviews} onCommentPost={onCommentPost}/>
          <Map offers={nearOffers} city = {selectedOffer.city} selectedOfferCardId = {selectedOfferCardId} mapType={'offer'}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((nearOffer) => (nearOffer.id !== selectedOffer.id &&
                <OfferCard
                  offerCardType={'offerScreen'}
                  key={nearOffer.id}
                  offer={nearOffer}
                  handleMouseMove = {handleMouseMove}
                />))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
