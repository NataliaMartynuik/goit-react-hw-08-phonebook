import { Title, Wrapper, Text } from './Home.styled'
import { Box } from 'components/Container/Container.styled'
export default function Home() {
  return (
    <Box>
    <Wrapper>
      <Title>
        Welcome to PhoneBook    
      </Title>
      <Text>
        Your contacts always with you
      </Text>
      </Wrapper>
    </Box>  
  );
}
