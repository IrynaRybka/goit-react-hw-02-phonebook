import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './Phonebook.module.css';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  phoneInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.props.onincludeThisName(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.container}>
        <section>
          <h1>Phonebook</h1>
          <Formik initialValues={this.state.name}>
          <Form autoComplete='off' className={css.form_phonebook} onSubmit={this.formSubmit}>
            <label htmlFor="name" className={css.mark_name}>
              Name
              <Field
                value={this.state.name}
                onChange={this.phoneInputChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label htmlFor="number" className={css.mark_number}>
              Number
              <Field
                value={this.state.number}
                onChange={this.phoneInputChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </Form>
          </Formik>
        </section>
      </div>
    );
  }
}
export default ContactForm;
