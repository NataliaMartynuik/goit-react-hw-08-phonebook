import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Wrapper, Title } from '../Login/Login.styled';
import { Box } from 'components/Container/Container.styled';

export default function Register() {
  return (
     <Box>
     <Title>Register</Title>
    <Wrapper>
     
     <RegisterForm />
      </Wrapper>
    </Box>  
  );
}
