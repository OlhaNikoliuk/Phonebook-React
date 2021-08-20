import Navigation from '../Navigation/Navigation';
import { Header } from './NavBar.styled';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

function NavBar() {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Header>
  );
}

export default NavBar;
