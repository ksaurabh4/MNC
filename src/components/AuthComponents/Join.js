import React from 'react';
import FormComponent from '../Form/FormComponent';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp, fetchUser } from '../../actions';

class Join extends React.Component {
  formSwitch = () => {
    return (
      <h5>
        Already have an account? <Link to={`/login`}>Log in here</Link>
      </h5>
    );
  };

  onFormSubmit = async (formValues) => {
    await this.props.signUp(formValues);
    this.props.fetchUser();
  };
  render() {
    return (
      <div>
        <FormComponent
          btnText='Sign up'
          formName='join'
          formSwitch={this.formSwitch()}
          onSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //console.log(state);
  return {};
};
export default connect(mapStateToProps, { signUp, fetchUser })(Join);
