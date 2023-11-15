import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers, loadOffers, requireAuthorization} from './action';
import { offers } from '../mocks/offers';
import { Cities, AuthorizationStatus } from '../const';

import { Offer } from '../types/offer';

type initialStateType = {
    city: string;
    offers: Offer[];
    authorizationStatus: AuthorizationStatus;
};

const initialState: initialStateType = {
  city: Cities.Paris,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown
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
    });
});

export {reducer};
