import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { useDispatch } from 'react-redux';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { login } from '../../redux/auth/auth-operations';
import {
  FormWrap,
  Title,
  CustomForm,
  Label,
  LabelWrap,
  Input,
  ErrorMsg,
  Button,
} from './LoginForm.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(7, 'Password should be 7 chars minimum.')
    .required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (user) => {
    dispatch(login(user));
  };

  return (
    <FormWrap>
      <Title>Log in to Phonebook</Title>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const { email, password } = values;
          onFormSubmit({ email, password });
          resetForm();
        }}
      >
        <CustomForm autoComplete='off'>
          <Label htmlFor='firstName'>
            <LabelWrap>
              <IoIosMail size='18' />
              Email
            </LabelWrap>
            <Input type='email' name='email' placeholder='example@mail.com' />
            <ErrorMessage name='name' component={ErrorMsg} />
          </Label>
          <Label htmlFor='firstName'>
            <LabelWrap>
              <RiLockPasswordFill size='18' />
              Password
            </LabelWrap>
            <Input type='password' name='password' placeholder='password' />
            <ErrorMessage name='number' component={ErrorMsg}></ErrorMessage>
          </Label>

          <Button type='submit'>Log in</Button>
        </CustomForm>
      </Formik>
    </FormWrap>
  );
};

export default LoginForm;
