import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import {
  FormWrap,
  LogInTitle,
  CustomForm,
  Label,
  Input,
  Button,
} from './LoginForm.styled';

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormWrap>
      <LogInTitle>Log in to Phonebook</LogInTitle>

      <CustomForm autoComplete='off' onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='example@mail.com'
          />
        </Label>

        <Label>
          Password
          <Input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type='submit'>Log in</Button>
      </CustomForm>
    </FormWrap>
  );
}

export default LoginForm;
