import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrashFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';
import {MdDelete} from 'react-icons/md'
import toast from 'react-hot-toast';
import { List, ListItem, Button } from './ContactList.styled';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete =(contactId,contactName)=>{
    let iconStyles = { color: '#ec96a4', size:'24px' };
    dispatch(deleteContact(contactId))
    toast(`Contact ${contactName} deleted`, {
      icon: <MdDelete style={iconStyles}/>,
      duration: 3000,
      position: 'top-right',
    });

  }

  return (
    <List>
      {contacts.map((contact) => {
        return (
          <ListItem key={contact.id}>
            <RiContactsFill size='17' />
            {contact.name}: {contact.number}
            <Button
              type='button'
              onClick={()=>(handleDelete(contact.id, contact.name))}
            >
              Delete
              <BsTrashFill/>
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ContactList;
