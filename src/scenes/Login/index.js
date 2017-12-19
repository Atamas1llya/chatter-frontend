import React, { Component } from 'react';
import { observer } from 'mobx-react';
import getFormData from 'get-form-data';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import { observe } from 'mobx';

import AuthForm from './components/AuthForm';
import Snowfall from '../../animations/Snowfall';

import UserStore from '../../stores/UserStore';
import UiStore from '../../stores/UiStore';

import AuthRedirectHandler from '../../components/handlers/AuthRedirectHandler';

import './style.less';

@observer
export default class LoginScene extends Component {
  componentDidMount() {
    this.snowfall = new Snowfall('#snowfall-container', UiStore.colorScheme.background);
    this.disposer = observe(UiStore, (change) => {
      this.snowfall.changeFlakesColor(UiStore.colorScheme.background);
    });
  }

  componentWillUnmount() {
    this.snowfall.destroy();
    delete this.snowfall;

    this.disposer();
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
          <Route path="/login/:status" component={AuthRedirectHandler} />

          <div id="snowfall-container" />

          <AuthForm
            toggleSnowfallColor={this.toggleSnowfallColor}
            onLocalLogin={this.onLocalLogin}
            onLocalRegister={this.onLocalRegister}
          />
        </div>
      );
    } else {
      return (
        <Redirect to="/home" />
      );
    }
  }
}
