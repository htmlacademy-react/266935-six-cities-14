import { SortTypesSettingItem } from './types/sort-types';
import { Offer } from './types/offer';

export const Setting = {
  FullOfferPhotosCount: 6
};

export const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  SelectedOffer = '/offer',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const SortTypesSetting: SortTypesSettingItem = {
  DefaultSort: 'Popular',
  PriceLowSort: 'Price: low to high',
  PriceHighSort: 'Price: high to low',
  RatingSort: 'Top rated first',
};

export const SortCallbacks = {
  DefaultSort: () => 0,
  PriceLowSort: (offerA: Offer, offerB: Offer) => offerA.price - offerB.price,
  PriceHighSort: (offerA: Offer, offerB: Offer) => offerB.price - offerA.price,
  RatingSort: (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating,
};

export const URL_MARKER_DEFAULT = '../markup/img/pin.svg';

export const URL_MARKER_CURRENT = '../markup/img/pin-active.svg';
