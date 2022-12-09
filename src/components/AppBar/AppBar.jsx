import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';
import { Box } from '../Container/Container.styled';



export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box>
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
        </Box>    
    );
};