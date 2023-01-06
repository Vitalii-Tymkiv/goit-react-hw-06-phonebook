import { Input, Btn } from './ContactForm.styled';

import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contactsSlice';
import { showAlertMessage } from 'UI/AlertMessage/AlertMessage';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const handleCheckContact = name => {
      const isExistContact = contacts.find(contact => contact.name === name);
      isExistContact && showAlertMessage(name);
      return isExistContact;
    };
    const normName = name.trim();
    if (handleCheckContact(name)) return;
    dispatch(addContact({ name: normName, phone }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        placeholder="Enter Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeForm}
      ></Input>

      <Input
        type="text"
        name="phone"
        value={phone}
        placeholder="Enter Phone Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChangeForm}
      ></Input>

      <Btn type="submit">Add Contact</Btn>
    </form>
  );
};
