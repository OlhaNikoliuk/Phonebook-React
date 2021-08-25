import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedInValue } from '../redux/auth/auth-selectors';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(isLoggedInValue);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

export default PublicRoute;
