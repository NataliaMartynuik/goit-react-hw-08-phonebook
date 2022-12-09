import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import { Form, Label, Input, Button } from './Register.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  
   const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

 return (
   <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="name">
        Username
      </Label>
        <Input type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Not may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter your name"
        />
      <Label htmlFor="email">
        Email
      </Label>
        <Input type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      <Label htmlFor='password'>
        Password
      </Label>
        <Input type="password"
          name="password"
          placeholder="Enter your password"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Not may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required

        />
      <Button type="submit">Sign Up</Button>
      </Form>
  );
};
