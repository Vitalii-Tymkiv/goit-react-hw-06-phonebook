import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

import { Container } from '../UI/Container';
import { SectionWrapper } from '../UI/SectionWrapper';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { InfoMessage } from './InfoMessage/InfoMessage';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <SectionWrapper title="Phonebook">
        <ContactForm />
      </SectionWrapper>

      <SectionWrapper title="Contact List">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <InfoMessage message={'Contact List is empty'} />
        )}
      </SectionWrapper>
    </Container>
  );
};
