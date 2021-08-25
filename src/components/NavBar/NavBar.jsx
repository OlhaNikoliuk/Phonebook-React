import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import { Header } from './NavBar.styled';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { isLoggedInValue } from '../../redux/auth/auth-selectors';

function NavBar() {
  const isLoggedIn = useSelector(isLoggedInValue);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}

export default NavBar;
