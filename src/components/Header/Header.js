import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, signOut } from '../../actions';
import './Header.css';
class Header extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  onLogoutButtonClick = (token) => {
    this.props.signOut(token);
  };

  loginLogoutButton = () => {
    if (this.props.user.id) {
      const avatarURL =
        `https://kumar-task-manager-api.herokuapp.com/users/${this.props.user.id}/avatar/` ||
        `img/profile-pic.jpg`;
      return (
        <React.Fragment>
          <button
            className='nav__item cta btn--green btn__logout'
            onClick={() => this.onLogoutButtonClick(this.props.user.token)}
          >
            Logout
          </button>
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

        <button className='nav-btn'></button>
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
