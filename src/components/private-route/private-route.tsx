// Core
import { Navigate } from 'react-router-dom';

// Others
import { AppRoute, IS_AUTHORIZATION } from '../../consts';
import { PrivateRouteProps } from './private-route.props';

// Component
export const PrivateRoute = ({
  children
}: PrivateRouteProps): JSX.Element => (
  IS_AUTHORIZATION
    ? children
    : <Navigate to={AppRoute.SignIn} />
);
