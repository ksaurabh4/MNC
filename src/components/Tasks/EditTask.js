import React from 'react';
import FormComponent from '../Form/FormComponent';
import { connect } from 'react-redux';
import { editTask, fetchTask } from '../../actions';

class EditTask extends React.Component {
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('data')).token;
    this.props.fetchTask(token, this.props.match.params.id);
  }
  onFormSubmit = (formValues) => {
    this.props.editTask(
      formValues,
      this.props.user.token,
      this.props.match.params.id
    );
  };

  render() {
    if (!this.props.task) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <FormComponent
          initialValues={{
            description: this.props.task.description,
            status: this.props.task.completed,
          }}
          btnText='Edit Task'
          formName='addTask'
          onSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { user: state.auth, task: state.tasks[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchTask, editTask })(EditTask);
