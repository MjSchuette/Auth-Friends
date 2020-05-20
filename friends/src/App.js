import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './utilities/PrivateRoute';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      credentials: {}
    }
  }
  render(){
    return (
      <div  className='App-header'>
        <Router>
          <Link to='/login'>Login</Link>
          <Link to='/friends-list'>Friends List</Link>
            <Switch>
              <PrivateRoute exact path='/friends-list' component={FriendsList} />
              <Route path='/login' component={Login} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;