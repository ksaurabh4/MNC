import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
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
