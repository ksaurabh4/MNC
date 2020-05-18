import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainSection from './MainSection/MainSection';
import Home from '../components/Home/Home';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Login from '../components/Login';
import Join from '../components/Join';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Router history={history}>
          <Header />
          <MainSection>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={AboutUs} />
            <Route path='/contact' exact component={ContactUs} />
            <Route path='/join' exact component={Join} />
            <Route path='/login' exact component={Login} />
          </MainSection>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
