import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { Cities, AuthorizationStatus } from '../const';

import { Offer } from '../types/offer';

type initialStateType = {
    city: string;
    offers: Offer[];
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
};

const initialState: initialStateType = {
  city: Cities.Paris,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
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
    });
});

export {reducer};
