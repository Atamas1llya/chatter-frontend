import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

import App from './App';
import LoginScreen from './scenes/Login';

// handlers
import AuthRedirectHandler from './components/handlers/AuthRedirectHandler';

ReactDOM.render(
  (
    <div>
      <DevTools />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route path="/home" component={App} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  ),
  document.getElementById('root'),
);


// webpack offline plugin
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
