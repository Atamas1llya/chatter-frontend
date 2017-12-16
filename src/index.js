import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import LoginScreen from './scenes/Login';

// handlers
import AuthRedirectHandler from './components/handlers/AuthRedirectHandler';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login/:status" component={AuthRedirectHandler} />
        <Route path="/login" component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root'),
);
