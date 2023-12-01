import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  setIsFullOfferLoadingStatus,
  setFullOfferError,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setAuthUserData,
  loadFullOffer,
  loadReviews,
  loadNearbyOffers,
  postReview,
  setIsReviewPosting,
  setPostReviewError,
} from './action';
import { Cities, AuthorizationStatus } from '../const';

import { FullOffer, Offer } from '../types/offer';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

type initialStateType = {
    city: string;
    offers: Offer[];
    fullOffer: FullOffer | null;
    fullOfferError: string | null;
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
    isFullOfferLoading: boolean;
    authUserData: UserData;
    reviews: Review[];
    nearbyOffers: Offer[];
    isReviewPosting: boolean;
    postReviewError: string | null;
};

const initialState: initialStateType = {
  city: Cities.Paris,
  offers: [],
  fullOffer: null,
  fullOfferError: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isFullOfferLoading: false,
  authUserData: <UserData>{},
  reviews: [],
  nearbyOffers: [],
  isReviewPosting: false,
  postReviewError: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {

      const {city} = action.payload;

      state.city = city;
    })
    .addCase(setIsFullOfferLoadingStatus, (state, action) => {
      state.isFullOfferLoading = action.payload;
    })
    .addCase(setFullOfferError, (state, action) => {
      state.fullOfferError = action.payload;
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
    .addCase(postReview, (state, action) => {
      state.reviews = state.reviews.concat(action.payload);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setAuthUserData, (state, action) => {
      state.authUserData = action.payload;
    })
    .addCase(setIsReviewPosting, (state, action) => {
      state.isReviewPosting = action.payload;
    })
    .addCase(setPostReviewError, (state, action) => {
      state.postReviewError = action.payload;
    });
});

export {reducer};
