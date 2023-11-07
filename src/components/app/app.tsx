import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import {AppRoute, AuthorizationStatus} from '../../const';

import { Review } from '../../types/review';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';


type AppScreenProps = {
  reviews: Review[];
}

function App({reviews}: AppScreenProps): JSX.Element {
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
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path = {`${AppRoute.Offer}/:offerId`}
            element = {
              <OfferScreen
                reviews={reviews}
                onCommentPost = {(rating: number, text: string): void => {
                  console.log(rating, text);
                }}
              />
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
