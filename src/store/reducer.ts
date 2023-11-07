import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';
import { offers } from '../mocks/offers';
import { Cities } from '../const';


const initialState = {
  city: Cities.Amsterdam,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.city;
    });
});

export {reducer};
