import { useAuth } from 'hooks';
import { Header, NavItems } from './Navigation.styled';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <NavItems to="/">
                Home
            </NavItems>
            {isLoggedIn && (
                <NavItems to="/contacts">
                    Contacts
                </NavItems>
            )}
        </Header>
    );
};
