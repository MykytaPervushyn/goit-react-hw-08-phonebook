import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { useFetchContactsQuery, } from './redux/contacts/contactsSlice';
import { useState } from 'react';



export default function App() {
  const [filter, setFilter] = useState('');

  const { data: contacts, isFetching } = useFetchContactsQuery();
  console.log(contacts);

  const getFiltredContacts = data =>
    data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  const handleChange = e => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts}/>
      <h2>Contacts</h2><Filter onChange={handleChange}/>
      {!isFetching && <ContactList contacts={getFiltredContacts(contacts)}
      />}
    </div>
  )
}