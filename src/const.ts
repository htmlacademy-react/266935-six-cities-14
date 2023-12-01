import { SortTypesSettingItem } from './types/sort-types';
import { City, Offer } from './types/offer';

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

export const CitiesForMap: City [] = [
  {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 12
    }
  },
  {
    'name': 'Brussels',
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13
    }
  },
  {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13
    }
  },
  {
    'name': 'Cologne',
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13
    }
  },
  {
    'name': 'Dusseldorf',
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13
    }
  },
];

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
  FullOffer = '/offers/',
  Reviews = '/comments/',
  Nearby = '/nearby',
  PostReview = '/comments',
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
