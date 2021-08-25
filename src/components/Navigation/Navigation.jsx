import { useSelector } from 'react-redux';
import { HeaderLink } from './Navigation.styled';
import { isLoggedInValue } from '../../redux/auth/auth-selectors';

function Navigation() {
  const isLoggedIn = useSelector(isLoggedInValue);

  return (
    <nav>
      <HeaderLink exact to='/'>
        Home
      </HeaderLink>
      {isLoggedIn && <HeaderLink to='/contacts'>Contacts</HeaderLink>}
    </nav>
  );
}

export default Navigation;
