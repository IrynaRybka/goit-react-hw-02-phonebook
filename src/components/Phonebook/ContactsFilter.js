import React from 'react';
// import { nanoid } from 'nanoid';
import css from '../Phonebook/Phonebook.module.css';

const ContactsFilter = ({ onChange, value }) => {
  return (
    <section className={css.container}>
      <h1>Contacts</h1>
      <label className={css.mark_name}>
        Find contacts by name
        <input onChange={onChange} value={value} type="text"></input>
      </label>
    </section>
  );
};

export default ContactsFilter;
