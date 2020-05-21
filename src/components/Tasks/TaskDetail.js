import React from 'react';

import { fetchTask } from '../../actions';
import { connect } from 'react-redux';
class TaskDetail extends React.Component {
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('data')).token;
    this.props.fetchTask(token, this.props.match.params.id);
  }
  render() {
    return <div>Task Detail Page</div>;
  }
}
const mapStateToProps = (state) => {
  return { user: state.auth, task: state.task };
};
export default connect(mapStateToProps, { fetchTask })(TaskDetail);
