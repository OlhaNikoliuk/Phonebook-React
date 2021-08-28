import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  color: var(--black-color);
  transition: all 300ms linear;

  margin: 4px;

  &.active {
    font-size: 26px;
    text-decoration: underline;
  }
`;
