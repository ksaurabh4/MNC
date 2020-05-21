import React from 'react';
import List from '../List/List';
import { fetchTasks } from '../../actions';
import { connect } from 'react-redux';

class TaskList extends React.Component {
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('data')).token;
    this.props.fetchTasks(token);
  }

  render() {
    console.log(this.props.tasks);
    return (
      <div>
        <List tasks={this.props.tasks} />;
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return { user: state.auth, tasks: Object.values(state.tasks) };
};
export default connect(mapStateToProp, { fetchTasks })(TaskList);
