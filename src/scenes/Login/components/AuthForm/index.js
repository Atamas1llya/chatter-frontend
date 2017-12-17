import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import * as Icon from 'react-feather';

import LoginForm from './components/Login';
import RegisterForm from './components/Register';

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
          <span className="brand">Chatter</span>
        </div>

        {/* <Form /> */}
        { Form }

        <div className="login-social">
          <a href="http://127.0.0.1:8081/api/login/google">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#353535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.8,10h-2.6l0,0H12v4h5.7c-0.8,2.3-3,4-5.7,4c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.7,0,3.2,0.7,4.2,1.8l2.8-2.8C17.3,3.1,14.8,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,11.3,21.9,10.6,21.8,10z" />
            </svg>
          </a>

          <a href="http://127.0.0.1:8081/api/login/twitter">
            <Icon.Twitter />
          </a>

          <a href="http://127.0.0.1:8081/api/login/facebook">
            <Icon.Facebook />
          </a>
        </div>
      </div>
    );
  }
}
