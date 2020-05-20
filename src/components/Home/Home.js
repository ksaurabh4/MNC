import React from 'react';
import List from '../List/List';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.user.id && <List userName={this.props.user.name} />}
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return { user: state.auth };
};
export default connect(mapStateToProp, {})(Home);
