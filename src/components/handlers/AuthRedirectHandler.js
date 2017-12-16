import React, { Component } from 'react';
import { Redirect } from 'react-router';
import queryString from 'query-string';
import { observer } from 'mobx-react';

import UserStore from '../../stores/UserStore';

@observer
export default class AuthRedirectHandler extends Component {
  state = {
    status: 'pending',
  }
  async componentWillMount() {
    const { status } = this.props.match.params;

    if (status === 'success') {
      const { auth_token } = queryString.parse(document.location.search);
      await UserStore.handleAuthRedirect(auth_token);
      this.setState({
        status: 'success',
      });
    } else {
      this.setState({
        status: 'failure',
      });
    }
  }

  render() {
    const { status } = this.state;

    if (status === 'success') {
      return <Redirect to="/" />;
    } else if (status === 'failure') {
      return <Redirect to="/login" />;
    } else {
      return null;
    }
  }
}
