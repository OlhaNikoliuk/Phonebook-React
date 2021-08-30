import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { useDispatch } from 'react-redux';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import * as authOperations from '../../redux/auth/auth-operations';
import {
  FormWrap,
  Title,
  CustomForm,
  Label,
  LabelWrap,
  Input,
  ErrorMsg,
  Button,
} from './RegistartionForm.styled';

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter name'),
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required').min(7, 'Password should be 7 chars minimum.'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (user) => {
    dispatch(authOperations.register(user));
  };

  return (
    <FormWrap>
      <Title>Log in to Phonebook</Title>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const { name, email, password } = values;
          onFormSubmit({ name, email, password });
          resetForm();
        }}
      >
        <CustomForm autoComplete='off'>
          <Label>
            <LabelWrap>
              <FaUserAlt size='16' />
              Name
            </LabelWrap>
            <Input type='text' name='name' placeholder='Chandler Bing' />
            <ErrorMessage name='name' component={ErrorMsg} />
          </Label>

          <Label>
            <LabelWrap>
              <IoIosMail size='18' />
              Email
            </LabelWrap>
            <Input type='email' name='email' placeholder='example@mail.com' />
            <ErrorMessage name='email' component={ErrorMsg} />
          </Label>

          <Label>
            <LabelWrap>
              <RiLockPasswordFill size='18' />
              Password
            </LabelWrap>
            <Input type='password' name='password' placeholder='password' />
            <ErrorMessage name='password' component={ErrorMsg}></ErrorMessage>
          </Label>

          <Button type='submit'>Log in</Button>
        </CustomForm>
      </Formik>
    </FormWrap>
  );
};

export default RegistrationForm;
