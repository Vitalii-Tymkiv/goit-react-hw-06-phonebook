import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { Label, LabelName, Input } from './Filter.styled';
import { GoSearch } from 'react-icons/go';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleInput = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <Label>
      <LabelName>
        <GoSearch style={{ verticalAlign: 'middle', marginRight: '5px' }} />
        Find contacts by name
      </LabelName>
      <Input
        type="text"
        name="name"
        value={filter}
        placeholder="Enter Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInput}
      ></Input>
    </Label>
  );
};
