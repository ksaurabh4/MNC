import React from 'react';
import List from '../List/List';
import { fetchTasks, fetchTasksByFilter } from '../../actions';
import { connect } from 'react-redux';

class TaskList extends React.Component {
  state = { tasks: [], filter: { Order: 'asc', Status: 'all' } };
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('data')).token;
    this.props.fetchTasks(token, undefined);
  }

  onOrderChange = (value) => {
    const newFilter = { ...this.state.filter };
    newFilter['Order'] = value;
    this.setState({ filter: newFilter });
    console.log('testing one');

    if (value === 'desc') {
      const newTaskOrder =
        this.state.tasks.length > 0 ? this.state.tasks : this.props.tasks;
      console.log(newTaskOrder);
      const x = newTaskOrder.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      this.setState({ tasks: x });
    } else {
      const newTaskOrder =
        this.state.tasks.length > 0 ? this.state.tasks : this.props.tasks;
      const x = newTaskOrder.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      this.setState({ tasks: x });
    }
  };
  onStatusChange = (value) => {
    const newFilter = { ...this.state.filter };
    newFilter['Status'] = value;
    this.setState({ filter: newFilter });

    if (value === 'all') {
      this.setState({ tasks: this.props.tasks });
      return;
    }

    this.setState({ tasks: [] });
    // const newTasks = this.props.tasks.filter((e) => value === `${e.completed}`);
    this.props.tasks.forEach((e) => {
      if (value === `${e.completed}`) {
        this.setState((preState) => ({ tasks: [...preState.tasks, e] }));
      }
    });

    // this.setState({ tasks: newTasks });
  };

  filter = {
    label: ['Order', 'Status'],
    options: {
      Order: ['Oldest', 'Newest'],
      Status: ['All', 'Completed', 'Pending'],
    },
    values: {
      Order: ['asc', 'desc'],
      Status: ['all', true, false],
    },
    onChange: [this.onOrderChange, this.onStatusChange],
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <List
          tasks={
            this.state.tasks.length > 0 ? this.state.tasks : this.props.tasks
          }
          filter={this.filter}
        />
        ;
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return { user: state.auth, tasks: Object.values(state.tasks) };
};
export default connect(mapStateToProp, { fetchTasks, fetchTasksByFilter })(
  TaskList
);
