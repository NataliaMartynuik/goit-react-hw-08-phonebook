import ContactList from 'components/ContactList/ContactList';
import Form from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Wrapper, Title} from './Contacts.styled';
import { Box } from 'components/Container/Container.styled'

export default function Contacts() {
   
  return (
    <Box>
       <Title>Contacts</Title> 
      <Wrapper>
      <div>
      <Form />
     
     
      </div>
        <div>
         <Filter />  
        <ContactList />
      </div>  
      </Wrapper>
    </Box>  
  );
}