import styled from "styled-components";

import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  gap: 15px;
  
  
`;

export const NavItems = styled(NavLink)`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  &.active,
  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #1976d2;
  }
`;