import React, { Component } from 'react';
import { observer } from 'mobx-react';
import getFormData from 'get-form-data';

import AuthForm from './components/AuthForm';
import UserStore from '../../stores/UserStore';

@observer
export default class LoginScene extends Component {
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
    return (
      <AuthForm
        onLocalLogin={this.onLocalLogin}
        onLocalRegister={this.onLocalRegister}
      />
    );
  }
}
