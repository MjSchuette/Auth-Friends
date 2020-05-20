import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
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
      <div>
        <Router>
          <Link to='/login'>Login</Link><br/>
          {/* <Link to='/friends-list'>Friends List</Link><br/>
          <Link to='/add-friend'>Add Friend</Link><br/> */}
            <Switch>
              {/* <PrivateRoute exact path='/friends-list' component={FriendsList} />
              <PrivateRoute exact path='/add-friend' component={AddFriend} /> */}
              <Route path='/login' component={Login} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
