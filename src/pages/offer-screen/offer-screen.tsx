import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import {useState} from 'react';

import Header from '../../components/header/header';
import OfferFullCard from '../../components/offer-full-card/offer-full-card';
import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';

import NotFoundScreen from '../not-found-screen/not-found-screen';

import { CitiesForMap } from '../../const';
import { City, FullOffer, Offer } from '../../types/offer';
import { Review } from '../../types/review';

import { useAppSelector } from '../../hooks';


function OfferScreen(): JSX.Element{

  const [selectedOfferCardId, setSelectedOfferCardId] = useState<FullOffer['id'] | null>(null);

  const params = useParams();
  let offerIdFromURI: string = '';

  if (params.offerId !== undefined){
    offerIdFromURI = params.offerId;
  }

  const offers: Offer[] = useAppSelector((state) => state.offers);
  const nearbyOffers: Offer[] = useAppSelector((state) => state.nearbyOffers);
  const fullOffer: FullOffer = useAppSelector((state) => state.fullOffer);
  const reviews: Review[] = useAppSelector((state) => state.reviews);
  const selectedCity: string = useAppSelector((state) => state.city);

  const cityForMap: City = CitiesForMap.find((city) => city.name === selectedCity) ?? CitiesForMap[0];
  const offerFromURI = offers.find((offer) => offer.id === offerIdFromURI);

  function handleMouseMove(offerId: FullOffer['id'] | null){
    setSelectedOfferCardId(offerId);
  }

  if (!(fullOffer && offerFromURI)) {
    return (
      <NotFoundScreen />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>6  cities. Offer</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferFullCard
            fullOffer={fullOffer}
            reviews={reviews}
          />
          <Map
            offers={nearbyOffers}
            city = {cityForMap}
            selectedOfferCardId = {selectedOfferCardId}
            mapType={'offer'}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearOffer) => (
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
