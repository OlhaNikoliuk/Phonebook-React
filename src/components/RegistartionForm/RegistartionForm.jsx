import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import {
  FormWrap,
  Title,
  CustomForm,
  Label,
  Input,
  Button,
} from './RegistrationForm.styled';

function RegistrationForm() {
  const dispath = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        return setName(value);

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
    dispath(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormWrap>
      <Title>Create your account</Title>

      <CustomForm autoComplete='off' onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type='text'
            name='name'
            autoComplete='off'
            value={name}
            onChange={handleChange}
            placeholder='Rosie Simpson'
          />
        </Label>

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

        <Button type='submit'>Sign up</Button>
      </CustomForm>
    </FormWrap>
  );
}

export default RegistrationForm;
