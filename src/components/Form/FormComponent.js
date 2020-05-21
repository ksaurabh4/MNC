import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Form.css';

class FormComponent extends React.Component {
  renderErrorMessage = (meta) => {
    if (meta.touched) {
      return <div className='form__error'>{meta.error}</div>;
    } else {
      return null;
    }
  };
  renderSelectField = (formProps) => {
    console.log(formProps);
    return (
      <select className='form__select' {...formProps.input}>
        <option value='false'>Not Completed</option>
        <option value='true'>Completed</option>
      </select>
    );
  };
  renderInput = (formProps) => {
    //this formProps attached with reduxForm
    //console.log(formProps);
    return (
      <React.Fragment>
        <input
          className='form__input'
          placeholder={formProps.placeholder}
          {...formProps.input}
        />
        {this.renderErrorMessage(formProps.meta)}
      </React.Fragment>
    );
    //attached all the input properties with redux form field
  };
  componentDidMount() {}
  renderFormField = (formName) => {
    if (formName === 'login') {
      return (
        <React.Fragment>
          <Field
            name='email'
            component={this.renderInput}
            type='text'
            placeholder='E-mail address'
          />
          <Field
            name='password'
            component={this.renderInput}
            type='text'
            placeholder='Password'
          />
        </React.Fragment>
      );
    } else if (formName === 'join') {
      return (
        <React.Fragment>
          <Field
            name='name'
            component={this.renderInput}
            type='text'
            placeholder='Your name'
          />
          <Field
            name='email'
            component={this.renderInput}
            type='text'
            placeholder='E-mail address'
          />
          <Field
            name='password'
            component={this.renderInput}
            type='text'
            placeholder='Password'
          />
        </React.Fragment>
      );
    } else if (formName === 'addTask') {
      return (
        <React.Fragment>
          <Field
            name='description'
            component={this.renderInput}
            type='text'
            placeholder='Enter task'
          />
          <Field
            name='status'
            component={this.renderSelectField}
            type='select'
            placeholder='Task status'
          />
          <Field
            name='assigned'
            component={this.renderInput}
            type='text'
            placeholder='Assigned to'
          />
        </React.Fragment>
      );
    }
  };
  onFormSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className='form'>
        <form
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
          className='form__form'
        >
          <div className='form__logo'>MNC</div>
          {this.renderFormField(this.props.formName)}

          <button className='form__btn btn--green'>{this.props.btnText}</button>
        </form>
        <div className='form__disclaimer'>
          {this.props.formName === 'join' && (
            <p>
              By creating an account, you agree and accept our's
              <a href='/'>Terms of Service</a> and{' '}
              <a href='/'>Privacy Policy</a>
            </p>
          )}
          {this.props.formSwitch}
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!formValues.name) {
    errors.name = 'You must enter a name';
  }
  if (!formValues.email) {
    errors.email = 'You must enter your email';
  } else if (!re.test(String(formValues.email).toLowerCase())) {
    errors.email = 'Email is not valid';
  }
  if (!formValues.password) {
    errors.password = 'You must enter the password';
  } else if (formValues.password.length < 6) {
    errors.password = 'Password must be atleast 6 long';
  }
  return errors;
};

export default reduxForm({
  form: 'UserForm',
  validate,
})(FormComponent);
