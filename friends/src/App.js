import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';

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
            <Switch>
              <Route path='/login' component={Login} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
