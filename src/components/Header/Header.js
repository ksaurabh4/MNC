import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, signOut } from '../../actions';
import './Header.css';
class Header extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  loginLogoutButton = () => {
    const onLogoutButtonClick = (token) => {
      this.props.signOut(token);
    };
    if (this.props.user.id) {
      const avatarURL =
        `https://kumar-task-manager-api.herokuapp.com/users/${this.props.user.id}/avatar/` ||
        `img/profile-pic.jpg`;
      return (
        <React.Fragment>
          <Link
            to={'/login'}
            className='nav__item cta btn--green'
            onClick={() => onLogoutButtonClick(this.props.user.token)}
          >
            Logout
          </Link>
          <div className='nav__user'>
            <img
              className='nav__user--avatar'
              alt='User Avatar Pic'
              src={avatarURL || null}
            />
            <p className='nav__user--name'>{this.props.user.name}</p>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Link className='nav__item cta btn--orange' to={`/join`}>
          Join
        </Link>
        <Link className='nav__item cta btn--green' to={`/login`}>
          Login
        </Link>
      </React.Fragment>
    );
  };

  render() {
    return (
      <header className='header'>
        <div className='logo'>
          <img src='/img/logo.png' alt='site logo' />
        </div>
        <ul className='nav'>
          <Link className='nav__item' to={`/`}>
            Home
          </Link>

          <Link className='nav__item' to={`/about`}>
            About Us
          </Link>

          <Link className='nav__item' to={`/contact`}>
            Contact Us
          </Link>

          {this.loginLogoutButton()}
        </ul>
      </header>
    );
  }
}
const mapStateToPtops = (state) => {
  return { user: state.auth };
};
export default connect(mapStateToPtops, { fetchUser, signOut })(Header);
