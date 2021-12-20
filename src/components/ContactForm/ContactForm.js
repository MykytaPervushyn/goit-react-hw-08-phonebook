import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/actions';
import { getContacts } from '../../redux/contacts/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = addContact({ name: name, number: number });

    if (contacts.find(contact => contact.payload.name === name)) {
      return alert(`${name} is already in contacts`) || reset();
    } else if (contacts.find(contact => contact.payload.number === number)) {
      return alert(`${number} is already in contacts`) || reset();
    }
    
    dispatch(addContact(contact));
    
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  

  return (
    <form className={s.contactForm}
      onSubmit={handleSubmit}
    >
        <div className={s.formWrap}>
          <label className={s.label}>
            Name{' '}
            <input
              className={s.input}
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={s.label}>
            Number{' '}
            <input
              className={s.input}
              type="tel"
              value={number}
              onChange={handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <button className={s.button} type="submit">
            Add contact
          </button>
        </div>
      </form>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.array,
};
