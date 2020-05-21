import React from 'react';
import FormComponent from '../Form/FormComponent';
import { connect } from 'react-redux';
import { addTask } from '../../actions';

class CreateTask extends React.Component {
  onFormSubmit = (formValues) => {
    this.props.addTask(formValues, this.props.user.token);
  };
  render() {
    return (
      <div>
        <FormComponent
          initialValues={{ status: 'false' }}
          btnText='Add Task'
          formName='addTask'
          onSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.auth };
};
export default connect(mapStateToProps, { addTask })(CreateTask);
