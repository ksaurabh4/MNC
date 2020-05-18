import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends React.Component {
  render() {
    const loginLogoutButton = () => {
      // return <Link className='nav__item cta btn--red'>Logout</Link>;
      return (
        <Link className='nav__item cta btn--green' to={`/login`}>
          Login
        </Link>
      );
    };
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

          <Link className='nav__item cta btn--orange' to={`/join`}>
            Join
          </Link>
          {loginLogoutButton()}
        </ul>
      </header>
    );
  }
}

export default Header;
