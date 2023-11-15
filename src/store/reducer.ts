import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers, loadOffers, requireAuthorization, setError } from './action';
import { offers } from '../mocks/offers';
import { Cities, AuthorizationStatus } from '../const';

import { Offer } from '../types/offer';

type initialStateType = {
    city: string;
    offers: Offer[];
    authorizationStatus: AuthorizationStatus;
    error: string | null;
};

const initialState: initialStateType = {
  city: Cities.Paris,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {

      const {city} = action.payload;

      state.city = city;
    })
    .addCase(fillOffers, (state) => {
      state.offers = offers;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
