import { lazy, Suspense } from 'react';
//import { Toaster } from 'react-hot-toast';
//import { HiUsers } from 'react-icons/hi';
//import { FaAddressBook } from 'react-icons/fa';
//import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
//import Section from './components/Section/Section';
//import ContactForm from './components/ContactForm/ContactForm';
//import ContactList from './components/ContactList/ContactList';
//import Filter from './components/Filter/Filter';
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import { Spinner } from './components/Spinner/Spinner';

//import { isLoadingValue } from './redux/contacts/contacts-selectors';

function App() {
  //const isLoading = useSelector(isLoadingValue);

  return (
    <>
      <NavBar />

      <Suspense fallback={<Spinner />}>
        <Container>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>

            <Route path='/register' exact>
              <RegisterPage />
            </Route>

            <Route path='/login'>
              <LoginPage />
            </Route>

            {/* <Route path='/contacts'>
              <ContactsPage />
            </Route> */}

            <Redirect to='/' />
          </Switch>
        </Container>
      </Suspense>
    </>
  );
}

export default App;
