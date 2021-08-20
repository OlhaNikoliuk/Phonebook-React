import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const HeaderLink = styled(NavLink)`
  font-family: var(--title-font);

  font-size: 24px;
  line-height: 36px;
  text-align: center;
  text-decoration: none;

  font-weight: 500;
  color: var(--white-color);

  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    font-size: 26px;
    text-decoration: underline;
  }
`;
