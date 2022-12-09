import { Nav, NavItems } from './AuthNav.styled';


export const AuthNav = () => {
    return (
        
   
        <Nav>
            <NavItems to="/register">
                Register
            </NavItems>
            <NavItems to="/login">
                Log In
            </NavItems>
            </Nav>
  
    );
};