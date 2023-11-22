import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../../components/header/header';
import OfferFullCard from '../../components/offer-full-card/offer-full-card';
import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';

import NotFoundScreen from '../not-found-screen/not-found-screen';

import { CitiesForMap } from '../../const';
import { City, FullOffer } from '../../types/offer';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFullOfferAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';


function OfferScreen(): JSX.Element{

  const [selectedOfferCardId, setSelectedOfferCardId] = useState<FullOffer['id'] | null>(null);

  const params = useParams();

  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const selectedCity = useAppSelector((state) => state.city);
  const isFullOfferLoading = useAppSelector((state) => state.isFullOfferLoading);
  const fullOfferError = useAppSelector((state) => state.fullOfferError);

  const cityForMap: City = CitiesForMap.find((city) => city.name === selectedCity) ?? CitiesForMap[0];

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(params.offerId){
      dispatch(fetchFullOfferAction(params.offerId));
    }
  }, []);

  function handleMouseMove(offerId: FullOffer['id'] | null){
    setSelectedOfferCardId(offerId);
  }

  if (fullOfferError === 'NOT_FOUND') {
    return (
      <NotFoundScreen />
    );
  }

  if(isFullOfferLoading) {
    return (
      <LoadingScreen />
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
          <OfferFullCard />
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
