import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { FaAddressBook, FaUserAlt, FaPhoneAlt } from 'react-icons/fa';

import { getContactList } from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contacts-operations';
import {
  FormWrap,
  Title,
  CustomForm,
  Label,
  LabelWrap,
  Input,
  ErrorMsg,
  Button,
} from './FormikContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter contact name'),
  number: Yup.string()
    .phone(
      'UA',
      true,
      'Please enter phone number in correct format  38(0**) *** ****'
    )
    .required(),
});

console.log(validationSchema.fields.number.isValidSync('380934456677'));

const FormikContactForm = () => {
  const allContacts = useSelector(getContactList);
  const dispatch = useDispatch();

  const onFormSubmit = (newContact) => {
    const includedContact = allContacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (includedContact) {
      toast.error(`${newContact.name} is already in contacts.`, {
        duration: 3000,
        position: 'top-right',
      });
      return;
    } else {
      dispatch(addContact(newContact));
      toast.success(`Contact ${newContact.name} added to Phonebook`, {
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  return (
    <FormWrap>
      <Title><FaAddressBook size='24' />Phonebook</Title>

      <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const { name, number } = values;
        onFormSubmit({ name, number });
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ touched }) => (
        <CustomForm autoComplete='off'>
          <Label htmlFor='firstName'>
            <LabelWrap><FaUserAlt size='16' />
            Name</LabelWrap>
            <Input type='text' name='name' placeholder='Chandler Bing' />
            <ErrorMessage name='name' component={ErrorMsg} />
          </Label>
          <Label htmlFor='firstName'>
            <LabelWrap><FaPhoneAlt size='16' />
            Number</LabelWrap>
            <Input type='text' name='number' placeholder='38(0**) *** ****' />
            <ErrorMessage name='number' component={ErrorMsg}></ErrorMessage>
          </Label>

          <Button type='submit'>Add Contact</Button>
        </CustomForm>
      )}
    </Formik>
    </FormWrap>
  );
};

export default FormikContactForm;
