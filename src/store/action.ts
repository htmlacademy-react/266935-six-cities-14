import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { UserData } from '../types/user-data';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<{city: string}>('main/changeCity');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setAuthUserData = createAction<UserData>('user/setAuthUserData');
