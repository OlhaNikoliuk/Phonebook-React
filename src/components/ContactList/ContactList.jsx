import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrashFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';
import { List, ListItem, Button } from './ContactList.styled';
import { fetchContacts,  deleteContact,} from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.map((contact) => {
        return (
          <ListItem key={contact.id}>
            <RiContactsFill size='17' />
            {contact.name}: {contact.number}
            <Button
              type='button'
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
              <BsTrashFill></BsTrashFill>
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ContactList;
