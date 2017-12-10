import React, { Component } from 'react';

import LoginFrame from './components/LoginFrame';
import UserStore from '../../stores/UserStore';

export default class LoginScene extends Component {
  onLocalLogin = async () => {

  }
  
  render() {
    return (
      <LoginFrame
        onLocalLogin={this.onLocalLogin}
      />
    )
  }
}
