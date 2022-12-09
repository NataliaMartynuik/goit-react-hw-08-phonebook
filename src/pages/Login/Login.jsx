import { LoginForm } from 'components/LoginForm/LoginForm';
import { Wrapper, Title } from './Login.styled';
import { Box } from 'components/Container/Container.styled';

export default function Login() {
  return (
    <Box>
      <Title>Login</Title>
    <Wrapper>
     
      <LoginForm />
      </Wrapper>
    </Box>  
  );
}