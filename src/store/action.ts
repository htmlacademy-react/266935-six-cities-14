import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction<{city: string}>('main/changeCity');

export const fillOffers = createAction('main/fillOffers');

export const loadOffers = createAction<Offer[]>('data/loadOffers');
