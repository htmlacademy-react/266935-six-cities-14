import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks';
import {AppRoute} from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { checkAuthAction } from '../../store/api-actions';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  },[dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<MainScreen />}
          />
          <Route
            path = {AppRoute.Login}
            element = {
              <PrivateRoute
                authorizationStatus={authorizationStatus}
                redirectTo={AppRoute.Root}
              >
                <LoginScreen />
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Favorites}
            element = {
              <PrivateRoute
                authorizationStatus={authorizationStatus}
                redirectTo={AppRoute.Login}
              >
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path = {`${AppRoute.SelectedOffer}/:offerId`}
            element = {
              <OfferScreen />
            }
          />
          <Route
            path = "*"
            element = {<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
