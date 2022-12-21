import React from 'react';

import css from '../Phonebook/Phonebook.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={css.container}>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
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

export default ContactList;
