import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setAuthUserData,
  loadFullOffer,
  loadReviews,
  loadNearbyOffers,
} from './action';
import { Cities, AuthorizationStatus } from '../const';

import { FullOffer, Offer } from '../types/offer';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

type initialStateType = {
    city: string;
    offers: Offer[];
    fullOffer: FullOffer;
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
    authUserData: UserData;
    reviews: Review[];
    nearbyOffers: Offer[];
};

const initialState: initialStateType = {
  city: Cities.Paris,
  offers: [],
  fullOffer: <FullOffer>{},
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  authUserData: <UserData>{},
  reviews: [],
  nearbyOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {

      const {city} = action.payload;

      state.city = city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadFullOffer, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setAuthUserData, (state, action) => {
      state.authUserData = action.payload;
    });
});

export {reducer};
