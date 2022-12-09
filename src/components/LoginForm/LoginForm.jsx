import { useDispatch } from "react-redux";
import { logIn } from 'redux/Auth/authOperations';
import { Form, Label, Input, Button} from './LoginForm.styled'


export const LoginForm = () => {
  const dispatch = useDispatch();
 
  const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value
            })
        );
        form.reset();
    };

  return (
      <Form onSubmit={handleSubmit} autoComplete="off" >
      <Label htmlFor="email">
        Email
         </Label>
        <Input type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      <Label htmlFor="password">
        Password
         </Label>
        <Input type="password"
          name="password"
          placeholder="Enter your password"
          required
        />  
           <Button type="submit">Sign In</Button>
        </Form>
   
  );
};
