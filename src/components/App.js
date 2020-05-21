import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainSection from './MainSection/MainSection';
import Home from '../components/Home/Home';
import AboutUs from './About/AboutUs';
import ContactUs from './Contact/ContactUs';
import Login from '../components/AuthComponents/Login';
import Join from '../components/AuthComponents/Join';
import TaskList from '../components/Tasks/TaskList';
import TaskDetail from '../components/Tasks/TaskDetail';
import CreateTask from './Tasks/CreateTask';
import EditTask from './Tasks/EditTask';
import DeleteTask from './Tasks/DeleteTask';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Router history={history}>
          <Header />
          <MainSection>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={AboutUs} />
              <Route path='/contact' exact component={ContactUs} />
              <Route path='/join' exact component={Join} />
              <Route path='/login' exact component={Login} />
              <Route path='/tasks' exact component={TaskList} />
              <Route path='/tasks/new' exact component={CreateTask} />
              <Route path='/tasks/:id' exact component={TaskDetail} />
              <Route path='/tasks/edit/:id' exact component={EditTask} />
              <Route path='/tasks/delete/:id' exact component={DeleteTask} />
            </Switch>
          </MainSection>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
