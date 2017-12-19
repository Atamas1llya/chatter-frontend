import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import UiStore from './stores/UiStore';
import UserStore from './stores/UserStore';

import SideBar from './components/SideBar';
import Loading from './components/Loading';

// screens
import IndexScreen from './scenes/Index';
import ChatScreen from './scenes/Chat';

// import 'normalize.css';
import './styles';


@observer
export default class App extends Component {
  componentDidMount() {
    UiStore.loading = false;
  }

  render() {
    if (UserStore.token) {
      return (
        <div>
          <SideBar />

          <div id="app-container">
            <Switch>
              <Route exact path="/home" component={IndexScreen} />
              <Route exact path="/home/chat" component={ChatScreen} />
            </Switch>
          </div>
          { UiStore.loading && <Loading /> }
        </div>
      );
    } else {
      return (
        <Redirect to="/login" />
      );
    }
  }
}
