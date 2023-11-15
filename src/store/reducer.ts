import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers, loadOffers, requireAuthorization, setOffersDataLoadingStatus, setError } from './action';
import { offers } from '../mocks/offers';
import { Cities, AuthorizationStatus } from '../const';

import { Offer } from '../types/offer';

type initialStateType = {
    city: string;
    offers: Offer[];
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
    error: string | null;
};

const initialState: initialStateType = {
  city: Cities.Paris,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
