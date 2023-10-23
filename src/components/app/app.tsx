import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import {AppRoute, AuthorizationStatus} from '../../const';

import { Offer } from '../../types/offer';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';


type AppScreenProps = {
  offerCardsCount: number;
  offers: Offer[];
}

function App({offerCardsCount, offers}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<MainScreen offerCardsCount={offerCardsCount} offers = {offers}/>}
          />
          <Route
            path = {AppRoute.Login}
            element = {
              <PrivateRoute
                restrictedFor={AuthorizationStatus.Auth}
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
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Login}
              >
                <FavoritesScreen offers = {offers} />
              </PrivateRoute>
            }
          />
          <Route
            path = {`${AppRoute.Offer}/:offerId`}
            element = {<OfferScreen />}
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
