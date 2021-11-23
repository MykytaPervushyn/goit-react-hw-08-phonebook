import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import useLocalStorage from "./hooks/useLocalStorage";



export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    } else if (contacts.find(contact => contact.number === number)) {
      return alert(`${number} is already in contacts`);
    }

    setContacts([...contacts, { id: uuidv4(), name: name, number: number }]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  
  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  const deleteContact = contactId =>
    setContacts(prevState => 
      prevState.filter(({ id }) => id !== contactId)
    );

  return (
    <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={getFiltredContacts()} onDeleteContact={deleteContact} />
      </div>
  )
}