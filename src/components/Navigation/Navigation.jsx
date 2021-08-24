import { useSelector } from 'react-redux';
import { HeaderLink } from './Navigation.styled';


function Navigation() {
  
  return (
    <nav>
      <HeaderLink exact to='/'>Home</HeaderLink>
      <HeaderLink to='/contacts'>Contacts</HeaderLink>
    </nav>
  );
}

export default Navigation;
