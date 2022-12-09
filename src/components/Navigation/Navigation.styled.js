import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Header = styled.nav`
  display: flex;
  gap: 30px;
    
`;

export const NavItems = styled(NavLink)`
  display: inline-block;
  font-weight: 700;
  color: #ffffff;
  font-size: 20px;
  &.active,
  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #1976d2;
  
  }
`;

