import { ListItem } from 'components/ListItem/ListItem';
import { useDispatch, useSelector} from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);  
  const filter = useSelector(getFilter); 
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.length > 0
  ? (contacts.filter(contact => contact.name.toLowerCase().includes(formattedFilter)))
  : [];

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <ListItem key={id} name={name} number={phone}  id={id}/>
      ))}
    </List>
  );
};
