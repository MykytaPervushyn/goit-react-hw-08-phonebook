import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice';

const ContactListItem = ({id, name, number}) =>{

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li>
        {name}: {number}
        <button className={s.button} onClick={() => deleteContact(id)} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete'}
        </button> 
    </li>
  );
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactListItem;