import React, { Component } from 'react';
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
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Threads || Chatter</title>
          <meta name="theme-color" content="#353535" />
        </Helmet>

        <div id="chat-container">
          <Messages />
          <Threads />
        </div>

      </div>
    );
  }
}
