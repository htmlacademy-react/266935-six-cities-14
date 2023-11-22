import {createAction} from '@reduxjs/toolkit';
import { FullOffer, Offer } from '../types/offer';
import { UserData } from '../types/user-data';
import { AuthorizationStatus } from '../const';
import { Review } from '../types/review';

export const changeCity = createAction<{city: string}>('main/changeCity');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadFullOffer = createAction<FullOffer>('data/loadFullOffer');

export const loadReviews = createAction<Review[]>('data/loadReviews');

export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');

export const postReview = createAction<Review>('data/postReview');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setIsFullOfferLoadingStatus = createAction<boolean>('data/setIsFullOfferLoadingStatus');

export const setFullOfferError = createAction<string | null>('data/setFullOfferError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setAuthUserData = createAction<UserData>('user/setAuthUserData');
