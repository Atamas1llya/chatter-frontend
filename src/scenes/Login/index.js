import React, { Component } from 'react';
import { observer } from 'mobx-react';
import getFormData from 'get-form-data';
import { Redirect } from 'react-router';

import AuthForm from './components/AuthForm';
import UserStore from '../../stores/UserStore';

import Snowfall from '../../animations/Snowfall';

import './style.less';

@observer
export default class LoginScene extends Component {
  componentDidMount() {
    new Snowfall('#snowfall-container');
  }

  onLocalLogin = async (e) => {
    e.preventDefault();

    const credentials = getFormData(e.target);
    await UserStore.login(credentials);
  }

  onLocalRegister = async (e) => {
    e.preventDefault();

    const credentials = getFormData(e.target);
    await UserStore.register(credentials);
  }

  render() {
    if (!UserStore.token) {
      return (
        <div id="login-container">
          <div id="snowfall-container"></div>
          <AuthForm
            onLocalLogin={this.onLocalLogin}
            onLocalRegister={this.onLocalRegister}
          />
        </div>
      );
    } else {
      return (
        <Redirect to="/" />
      );
    }
  }
}
