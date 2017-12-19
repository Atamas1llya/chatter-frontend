import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

import App from './App';
import LoginScreen from './scenes/Login';

// handlers
import AuthRedirectHandler from './components/handlers/AuthRedirectHandler';

// webpack offline plugin
// require('offline-plugin/runtime').install();

ReactDOM.render(
  (
    <div>
      <DevTools />
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={App} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  ),
  document.getElementById('root'),
);
