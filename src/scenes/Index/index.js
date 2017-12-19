import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './style';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home || Chatter</title>
          <meta name="theme-color" content="#353535" />
        </Helmet>
        <div id="index-page">
          <span>Some nice animation here</span>
        </div>
      </div>
    );
  }
}
