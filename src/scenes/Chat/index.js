import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

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
        123
      </div>
    );
  }
}
