import React from 'react';
import { fetchTask, deleteTask } from '../../actions';
import Model from '../Model/Model';
import history from '../../history';
import { connect } from 'react-redux';
class DeleteTask extends React.Component {
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('data')).token;
    this.props.fetchTask(token, this.props.match.params.id);
  }

  onDeleteButtonClick = () => {
    console.log(this.props.task._id);
    this.props.deleteTask(this.props.user.token, this.props.task._id);
  };

  modelHeading = (task) => {
    return (
      <div className='model__heading'>
        <h3>{task.description}</h3>
      </div>
    );
  };
  modelMessage = () => {
    return (
      <div className='model__message'>
        <p>{`Are you sure you want to delete this task?`}</p>
      </div>
    );
  };
  modelActions = () => {
    return (
      <div className='model__btn'>
        <button className='btn btn--red' onClick={this.onDeleteButtonClick}>
          Delete
        </button>
        <button
          className='btn btn--green'
          onClick={() => {
            history.push('/tasks');
          }}
        >
          Cancel
        </button>
      </div>
    );
  };
  render() {
    if (!this.props.task) {
      return <div>Loading....</div>;
    }
    return (
      <div
        onClick={() => {
          history.push('/tasks');
        }}
      >
        {
          <Model
            modelHeading={this.modelHeading(this.props.task)}
            modelMessage={this.modelMessage()}
            modelActions={this.modelActions()}
          />
        }
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { user: state.auth, task: state.tasks[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchTask, deleteTask })(DeleteTask);
