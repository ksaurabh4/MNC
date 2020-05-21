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
          <li>
            <a
              href='#'
              className='nav__item cta btn--green'
              onClick={() => this.onLogoutButtonClick(this.props.user.token)}
            >
              Logout
            </a>
          </li>
          <li className='user__profile'>
            <div className='nav__user'>
              <img
                className='nav__user--avatar'
                alt='User Avatar Pic'
                src={avatarURL || null}
              />
              <p className='nav__user--name'>{this.props.user.name}</p>
            </div>
          </li>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <li>
          <Link className='nav__item cta btn--orange' to={`/join`}>
            Join
          </Link>
        </li>
        <li>
          <Link className='nav__item cta btn--green' to={`/login`}>
            Login
          </Link>
        </li>
      </React.Fragment>
    );
  };

  render() {
    return (
      <header className='header'>
        {/* <button className='nav-btn'></button> */}
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='nav-btn'></label>
        <Link to='/' className='logo'>
          MNC
        </Link>

        <ul className='nav'>
          <li>
            <Link className='nav__item active' to={`/`}>
              Home
            </Link>
          </li>

          <li>
            <Link className='nav__item' to={`/about`}>
              About
            </Link>
          </li>

          <li>
            <Link className='nav__item' to={`/contact`}>
              Contact
            </Link>
          </li>

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
