import { createReducer } from '@reduxjs/toolkit';
import {
  selectLocation,
  loadOffers,
  setOffersDataLoadingStatus,
  requireAuthorization,
  setUserData,
  setOfferById, setNearby, setReviews, pushReview, setIsErrorOffer,
} from './action.ts';
import { AuthorizationStatus, cities, DEFAULT_CITY } from '../const.ts';
import { City, Offer, OfferExtended } from '../types/offer.ts';
import { User } from '../types/user-data.ts';
import { Review } from '../types/review.ts';

const getDefaultCity = (cityName: string, places: City[]): City => {
  const city = places.find((place: City) => place.name === cityName);
  if (!city) {
    throw new Error(`City with name ${cityName} not found`);
  }
  return city;
};

type InitialState = {
  city: City;
  offers: Offer[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: User | null;
  offerData: OfferExtended | null;
  nearbyData: Offer[];
  reviewData: Review[];
  isErrorOffer: boolean;
}

const initialState: InitialState = {
  city: getDefaultCity(DEFAULT_CITY, cities),
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  offerData: null,
  nearbyData: [],
  reviewData: [],
  isErrorOffer: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectLocation, (state, action) => {
      const { locationName } = action.payload;
      const foundCity = cities.find((city) => city.name === locationName);
      if (foundCity) {
        state.city = { ...foundCity };
      }
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setOfferById, (state, action) => {
      state.offerData = action.payload;
    })
    .addCase(setNearby, (state, action) => {
      state.nearbyData = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviewData = action.payload;
    })
    .addCase(pushReview, (state, action) => {
      state.reviewData = [...state.reviewData, action.payload];
    })
    .addCase(setIsErrorOffer, (state, action) => {
      state.isErrorOffer = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
