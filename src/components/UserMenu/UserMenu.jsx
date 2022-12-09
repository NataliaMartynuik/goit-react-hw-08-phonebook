import { useDispatch } from "react-redux";
import { logOut } from "redux/Auth/authOperations";
import { useAuth } from "hooks";
import { Name, Wrapper } from './UserMenu.styled';
import { Button } from "@mui/material";



export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Wrapper>
            <Name>Welcome, {user.name}</Name>
            <Button variant="outlined"  type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </Wrapper>
    )
}