import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact_list}>
          <p>
            <span>{name}:</span>
            <span>{number}</span>
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
