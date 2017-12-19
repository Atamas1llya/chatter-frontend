import React, { Component } from 'react';

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
        123
      </div>
    );
  }
}
