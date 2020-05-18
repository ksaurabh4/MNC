import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Form.css';

class FormComponent extends React.Component {
  componentDidMount() {}
  renderFormField = (fieldCount) => {
    if (fieldCount === 2) {
      return (
        <React.Fragment>
          <Field
            name='inputEmail'
            component='input'
            type='text'
            placeholder='E-mail address'
            className='form__input'
          />
          <Field
            name='inputPassword'
            component='input'
            type='text'
            placeholder='Password'
            className='form__input'
          />
        </React.Fragment>
      );
    } else if (fieldCount === 3) {
      return (
        <React.Fragment>
          <Field
            name='inputName'
            component='input'
            type='text'
            placeholder='Your name'
            className='form__input'
          />
          <Field
            name='inputEmail'
            component='input'
            type='text'
            placeholder='E-mail address'
            className='form__input'
          />
          <Field
            name='inputPassword'
            component='input'
            type='text'
            placeholder='Password'
            className='form__input'
          />
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <div className='form'>
        <form className='form__form'>
          <img src='/img/logo.png' alt='logo' className='form__logo' />
          {this.renderFormField(this.props.fieldCount)}

          <button className='form__btn'>{this.props.btnText}</button>
        </form>
        <div>
          <p>
            By creating an account, you agree and accept our's
            <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>
          </p>
          {this.props.formSwitch}
        </div>
      </div>
    );
  }
}

const showValues = (formValues) => {
  console.log(formValues);
};

const validate = (props) => {
  console.log(props);
  // console.log(formValues);
  //this.props.handleSubmit(this.showValues);
};

export default reduxForm({ form: 'JoinForm', validate })(FormComponent);
