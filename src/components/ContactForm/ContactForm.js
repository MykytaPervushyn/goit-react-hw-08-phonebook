import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    onSubmit({name: name, number: number});

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
