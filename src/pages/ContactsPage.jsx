import { Toaster } from 'react-hot-toast';
import { HiUsers } from 'react-icons/hi';
import { FaAddressBook } from 'react-icons/fa';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Spinner from '../components/Spinner/Spinner';


function ContactsPage(){
  return (
    <Container>
      <Toaster />
      <Section title={'Phonebook'}>
        <FaAddressBook size='24' />
        <ContactForm />
      </Section>

      <Section title={'Contacts'}>
        <HiUsers size='26' />
        <Filter />
        <ContactList />
      </Section>
      {/* {isLoading && <Spinner />} */}
    </Container>
  );
}

export default ContactsPage