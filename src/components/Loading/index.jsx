import React from 'react';

import './style.less';

const Loading = () => (
  <div id="loading-overlay">
    <div className="brand">
      <span>Chatter</span>
    </div>
    <div className="preloader">
      <i className="icon ion-load-d"></i>
      <span>Loading...</span>
    </div>
  </div>
);

export default Loading;
