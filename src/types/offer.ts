export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
}

export type FullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export type City = {
    name: string;
    location: Location;
}

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type Host = {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
}


