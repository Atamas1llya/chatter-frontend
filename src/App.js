import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router';

import UiStore from './stores/UiStore';
import UserStore from './stores/UserStore';

import SideBar from './components/SideBar';
import Loading from './components/Loading';

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
          { UiStore.loading && <Loading /> }
          { this.props.childen }
        </div>
      );
    } else {
      return (
        <Redirect to="/login" />
      );
    }
  }
}
