import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import s from './Views.module.css';

const barStyles = {
  // display: 'flex',
  // alignItems: 'flex-end',
  marginBottom: 20,
};

export default function ContactView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts  = useSelector(contactsSelectors.getLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    // <Container>
    //   <div style={barStyles}>
    //     <ContactForm />
    //     <Filter />

    //     {isLoadingContacts  && <h1>Loading...</h1>}
    //   </div>

    //   <ContactList />

    // </Container>

    <main>
      <Container>
        <div className={s.container}>
          <ContactForm />
          <div className={s.content}>
            <Filter labelName='Find contacts by name' />
            {isLoadingContacts  && <h1>Loading...</h1>}
            <ContactList />
          </div>
        </div>
      </Container>
    </main>
  );
}