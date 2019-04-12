import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import Login from '../src/components/LoginPage';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <PrivateRoute exact path="/protected" component={FriendList}/>  
        </div>
      </Router>
    );
  }
}

export default App;
