import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './style';

import Threads from './components/Threads';
import Messages from './components/Messages';

import store from './store';

export default class Chat extends Component {
  componentDidMount() {
    store.init();
  }

  componentWillUnmount() {
    store.destroy();
  }

  render() {
    if (this.props.match.isExact) {
      return <Redirect exact to="/home/threads/select" />;
    }

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Threads || Chatter</title>
          <meta name="theme-color" content="#353535" />
        </Helmet>

        <div id="chat-container">
          <Route path="/home/threads/:thread_id" component={Messages} />
          <Threads />
        </div>

      </div>
    );
  }
}
