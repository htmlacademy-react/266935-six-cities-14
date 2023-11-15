import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers, loadOffers} from './action';
import { offers } from '../mocks/offers';
import { Cities } from '../const';

import { Offer } from '../types/offer';


type initialStateType = {
    city: string;
    offers: Offer[];
};

const initialState: initialStateType = {
  city: Cities.Paris,
  offers: [],
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
    });
});

export {reducer};
