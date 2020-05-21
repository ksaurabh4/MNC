import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    if (!this.props.user.id) {
      return (
        <div>
          <h2>You are not login</h2>
        </div>
      );
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <Link to='/tasks' className='btn cta'>
          My Task List
        </Link>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return { user: state.auth };
};
export default connect(mapStateToProp, {})(Home);
