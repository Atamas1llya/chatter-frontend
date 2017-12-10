import React, { Component } from 'react';

import * as Icon from 'react-feather';
import FieldGroup from '../../../../components/FieldGroup';
import PhoneForm from '../PhoneForm';

import './styles.less';

const LoginFrame = () => (
  <div className="login-container">
    <div className="login-brand">
      <span className="brand">Chatter</span>
    </div>

    <PhoneForm />

    <div className="login-social">
      <div>
        <Icon.Facebook />
      </div>
      <div>
        <a href="http://127.0.0.1:8081/api/login/twitter">
          <Icon.Twitter />
        </a>
      </div>
      <div className="active">
        <Icon.Phone />
      </div>
    </div>
  </div>
);

export default LoginFrame;
