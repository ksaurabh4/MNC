import React from 'react';
import FormComponent from './Form/FormComponent';
import { Link } from 'react-router-dom';

class Join extends React.Component {
  formSwitch = () => {
    return (
      <h5>
        Already have an account? <Link to={`/login`}>Log in here</Link>
      </h5>
    );
  };
  render() {
    return (
      <div>
        <FormComponent
          btnText='Sign up'
          fieldCount={3}
          formSwitch={this.formSwitch()}
        />
      </div>
    );
  }
}

export default Join;
