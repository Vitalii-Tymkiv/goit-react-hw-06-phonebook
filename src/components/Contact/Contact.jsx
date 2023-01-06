import { ContactItem, Name, Btn } from './Contact.styled';
import PropTypes from 'prop-types';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  //   const handleDelete = () => {
  //     dispatch(deleteContact(id));
  //   };

  return (
    <ContactItem>
      <Name>
        {name}: {phone}
      </Name>
      <Btn
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
        <RiDeleteBin6Fill style={{ marginLeft: '5px' }} />
      </Btn>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
