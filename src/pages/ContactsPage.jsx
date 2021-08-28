import { Toaster } from 'react-hot-toast';
import { HiUsers } from 'react-icons/hi';
import { FaAddressBook } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Section from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import FormikContactForm from '../components/FormikContactForm/FormikContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Spinner } from '../components/Spinner/Spinner';
import { isLoadingValue } from '../redux/contacts/contacts-selectors';
import { getContactList } from '../redux/contacts/contacts-selectors';

function ContactsPage() {
  const isLoading = useSelector(isLoadingValue);
  const contacts = useSelector(getContactList);
  console.log(contacts);
  return (
    <>
      <Toaster />
      <FormikContactForm />
      <Section title={'Contacts'}>
        <HiUsers size='26' />
        <Filter />
        <ContactList />
      </Section>

      {isLoading && <Spinner />}
    </>
  );
}

export default ContactsPage;
