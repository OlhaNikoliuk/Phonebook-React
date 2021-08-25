import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Spinner } from './components/Spinner/Spinner';
import { getCurrentUser } from './redux/auth/auth-operations';
import { isRefreshingValue } from './redux/auth/auth-selectors';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */)
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "registration" */)
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login" */)
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts" */)
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(isRefreshingValue);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <NavBar />

        <Suspense fallback={<Spinner />}>
          <Container>
            <Switch>
              <PublicRoute path='/' redirectTo='/contacts' exact>
                <HomePage />
              </PublicRoute>

              <PublicRoute path='/register' exact restricted>
                <RegisterPage />
              </PublicRoute>

              <PublicRoute path='/login' redirectTo='/contacts' restricted>
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path='/contacts'>
                <ContactsPage />
              </PrivateRoute>

              <Redirect to='/' />
            </Switch>
          </Container>
        </Suspense>
      </>
    )
  );
}

export default App;
