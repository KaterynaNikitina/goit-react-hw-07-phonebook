import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Form, Button, Label, Input } from './ContactForm.styled';
import { addContactsThunk } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('This does not exist');
      
    }
  }
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
        const isExistingContact = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
  
      if (isExistingContact) {
        alert(`${name} is already in contacts`);
        return;
      }
      dispatch(addContactsThunk({ name, number }));
    reset ();
  };

    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            placeholder='enter name'
            required
          />
        </Label>
        <Label>
          Tel. number
          <Input
            type='tel'
            name='number'
            value={number}
            onChange={handleChange}
            placeholder='enter phone number'
            required
          />
        </Label>
        <Button type='submit'>Add contact</Button>
      </Form>
    );
  };

