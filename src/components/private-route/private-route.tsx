import {Navigate} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
}

function PrivateRoute({
  authorizationStatus,
  redirectTo,
  children,
}: PrivateRouteProps){
  if (redirectTo === AppRoute.Login) {
    return authorizationStatus === AuthorizationStatus.NoAuth ? (
      <Navigate to={redirectTo} />
    ) : (
      children
    );
  }

  return authorizationStatus === AuthorizationStatus.Auth ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );

}

export default PrivateRoute;
