import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInValue } from '../redux/auth/auth-selectors';

function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(isLoggedInValue);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to='/login' />}
    </Route>
  );
}

export default PrivateRoute;
