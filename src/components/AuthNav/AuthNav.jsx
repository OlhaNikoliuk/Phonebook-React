import React from 'react';
import { BsDot } from 'react-icons/bs';
import { HeaderLink } from '../Navigation/Navigation.styled';
import { LinkWrap } from './AuthNav.styled';

function AuthNav() {
  return (
    <LinkWrap>
      <HeaderLink to='/register' exact>
        Sign Up
      </HeaderLink>
      <BsDot size='22' />
      <HeaderLink to='/login' exact>
        Log In
      </HeaderLink>
    </LinkWrap>
  );
}

export default AuthNav;
