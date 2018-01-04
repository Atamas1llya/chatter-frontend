import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import DevTools from 'mobx-react-devtools';

import App from './App';
import LoginScreen from './scenes/Login';

// handlers
import AuthRedirectHandler from './components/handlers/AuthRedirectHandler';

ReactDOM.render(
  (
    <div>
      {/* <DevTools /> */}
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

// install service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((err) => {
      console.log('Service Worker Registered');
    })
    .catch((err) => {
      console.warn('Failed to register service-worker!');
      console.error(err);
    })
}
