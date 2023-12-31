import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { FullOffer, Offer } from '../types/offer.js';
import { saveToken, dropToken } from '../services/token.js';
import { APIRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';

import {
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setAuthUserData,
  loadFullOffer,
  loadReviews,
  loadNearbyOffers,
  postReview,
  setIsFullOfferLoadingStatus,
  setFullOfferError,
  setPostReviewError,
  setIsReviewPosting,
} from './action';
import { Review } from '../types/review.js';
import { ReviewData } from '../types/review-data.js';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchFullOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFullOffer',
  async (selectedOfferId, {dispatch, extra: api}) => {
    dispatch(setIsFullOfferLoadingStatus(true));

    const fullOfferPath: string = APIRoute.FullOffer + selectedOfferId;
    const commentsPath: string = APIRoute.Reviews + selectedOfferId;
    const nearbyOffersPath: string = `${APIRoute.Offers }/${ selectedOfferId }${ APIRoute.Nearby}`;

    try{
      const fullOffer = await api.get<FullOffer>(fullOfferPath);
      const reviews = await api.get<Review[]>(commentsPath);
      const nearbyOffers = await api.get<Offer[]>(nearbyOffersPath);

      dispatch(loadFullOffer(fullOffer.data));
      dispatch(loadReviews(reviews.data));
      dispatch(loadNearbyOffers(nearbyOffers.data));

      dispatch(setIsFullOfferLoadingStatus(false));
    }catch (e: unknown){
      if (e instanceof AxiosError){
        if(e.response?.status === 404){
          dispatch(setFullOfferError('NOT_FOUND'));
        }
      }
    }

  },
);

export const postReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    dispatch(setIsReviewPosting(true));
    const postReviewPath: string = `${APIRoute.Reviews}/${ offerId }`;

    try{
      const {data} = await api.post<Review>(postReviewPath, { comment, rating });
      dispatch(postReview(data));
    }catch (e: unknown){
      if (e instanceof AxiosError){
        dispatch(setPostReviewError(e.message));
      }
    }

    dispatch(setIsReviewPosting(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setAuthUserData(data));
    } catch {
      dispatch(setAuthUserData(<UserData>{}));
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setAuthUserData(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthUserData(<UserData>{}));
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
