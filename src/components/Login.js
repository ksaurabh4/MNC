import React from 'react';
import FormComponent from './Form/FormComponent';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions/index';

class Login extends React.Component {
  componentDidMount() {
    this.props.signIn();
  }

  formSwitch = () => {
    return (
      <h5>
        Didn't joined yet? <Link to={`/login`}>Join here</Link>
      </h5>
    );
  };
  render() {
    return (
      <div>
        <FormComponent
          btnText='Sign up'
          fieldCount={2}
          formSwitch={this.formSwitch()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  //console.log(formValues);
};

export default connect(mapStateToProps, { signIn })(Login);
