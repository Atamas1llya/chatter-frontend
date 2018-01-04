import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import * as Icon from 'react-feather';

import LoginForm from './components/Login';
import RegisterForm from './components/Register';

import UiStore from '../../../../stores/UiStore';
import { apiHost } from '../../../../config';

import './styles.less';

export default class AuthForm extends Component {
  state = {
    mode: 'login',
  }

  changeMode = mode => this.setState({ mode });

  render() {
    const { onLocalLogin, onLocalRegister } = this.props;
    const { mode } = this.state;

    const Form = (mode === 'login')
      ? <LoginForm onSubmit={onLocalLogin} changeMode={this.changeMode} />
      : <RegisterForm onSubmit={onLocalRegister} changeMode={this.changeMode} />;

    return (
      <div className="login-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Auth || Chatter</title>
          <meta name="theme-color" content="#353535" />
        </Helmet>
        <div className="login-brand">
          <span className="brand" onClick={UiStore.switchTheme}>Chatter</span>
        </div>

        {/* <Form /> */}
        { Form }

        <div className="login-social">
          <a href={`${apiHost}/login/google`}>
            <Icon.PlusCircle />
          </a>

          <a href={`${apiHost}/login/twitter`}>
            <Icon.Twitter />
          </a>

          <a href={`${apiHost}/login/facebook`}>
            <Icon.Facebook />
          </a>
        </div>
      </div>
    );
  }
}
