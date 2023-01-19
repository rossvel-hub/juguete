import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { PrivateRoute } from './components/PrivateRoute';

import { AuthProvider } from './context/AuthContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// import { Container } from './components/Container';
import React, { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Router >
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup'component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
