import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      // ...data,
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    } else if (this.state.contacts.find(contact => contact.number === number)) {
      return alert(`${number} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = contactId =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));

  render() {
    const filtredContacts = this.getFiltredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
