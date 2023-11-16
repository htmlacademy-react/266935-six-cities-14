import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, requireAuthorization, setOffersDataLoadingStatus, setAuthUserData } from './action';
import { Cities, AuthorizationStatus } from '../const';

import { Offer } from '../types/offer';
import { UserData } from '../types/user-data';

type initialStateType = {
    city: string;
    offers: Offer[];
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
    authUserData: UserData;
};

const initialState: initialStateType = {
  city: Cities.Paris,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  authUserData: <UserData>{},
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
    .addCase(setAuthUserData, (state, action) => {
      state.authUserData = action.payload;
    });
});

export {reducer};
