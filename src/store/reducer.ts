import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers} from './action';
import { offers } from '../mocks/offers';
import { Cities } from '../const';

import { Offer } from '../types/offer';

type initialStateType = {
    city: string;
    offers: Offer[];
};

const initialState: initialStateType = {
  city: Cities.Amsterdam,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.city;
    })
    .addCase(fillOffers, (state) => {
      state.offers = offers;
    });
});

export {reducer};
