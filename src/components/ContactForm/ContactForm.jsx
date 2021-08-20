import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContactList } from '../../redux/contacts/contacts-selectors';
import { CustomForm, Label, Input, Button } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContactList);
  const dispatch = useDispatch();

  const findContact = (allContacts, name) => {
    const includedContact = allContacts
      ? allContacts.find(
          (contact) => contact.name.toLowerCase() === name.toLowerCase()
        )
      : '';

    if (includedContact) {
      toast.error(`${name} is already in contacts.`, {
        duration: 4000,
        position: 'top-right',
      });
      return includedContact;
    }
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const settedName = findContact(contacts, name);

    if (settedName) {
      return;
    } else {
      dispatch(addContact({ name, number }));
      toast.success(`Contact ${name} added to Phonebook`, {
        duration: 4000,
        position: 'top-right',
      });
      setName('');
      setNumber('');
    }
  };

  return (
    <div>
      <CustomForm onSubmit={onFormSubmit} autoComplete='off'>
        <Label>
          <FaUserAlt size='16' />
          Name
          <Input
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onInputChange}
            value={name}
            placeholder='Rosie Simpson'
            autoFocus
          />
        </Label>
        <Label>
          <FaPhoneAlt size='16' />
          Phone
          <Input
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
            required
            onChange={onInputChange}
            value={number}
            placeholder='38(***) *** ****'
          />
        </Label>
        <Button>Add Contact</Button>
      </CustomForm>
    </div>
  );
}

export default ContactForm;
