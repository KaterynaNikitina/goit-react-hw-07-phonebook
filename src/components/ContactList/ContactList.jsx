import { ListItem } from 'components/ListItem/ListItem';
import { useDispatch, useSelector} from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';

export const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <ListItem key={id} name={name} phone={phone}  id={id}/>
      ))}
    </List>
  );
};
