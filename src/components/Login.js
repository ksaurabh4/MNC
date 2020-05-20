import React from 'react';
import FormComponent from './Form/FormComponent';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, fetchUser } from '../actions/index';
import history from '../history';

class Login extends React.Component {
  componentDidMount() {
    if (this.props.user) {
      history.push('/');
    }
  }

  formSwitch = () => {
    return (
      <h5>
        Didn't joined yet? <Link to={`/join`}>Join here</Link>
      </h5>
    );
  };

  onFormSubmit = async (formValues) => {
    await this.props.signIn(formValues);
    this.props.fetchUser();
  };

  render() {
    return (
      <div>
        <FormComponent
          btnText='Login'
          formName='login'
          formSwitch={this.formSwitch()}
          onSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return { user: state.auth.token };
// };

export default connect(null, { signIn, fetchUser })(Login);
