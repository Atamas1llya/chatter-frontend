import React from 'react';
import * as Icon from 'react-feather';

module.exports = {
  apiHost: 'http://127.0.0.1:8081/api',
  menuRoutes: [
    {
      to: '/home',
      name: 'Home',
      icon: <Icon.Home />,
      params: {
        exact: true,
      },
    },
    {
      to: '/home/threads/select',
      name: 'Theads',
      icon: <Icon.MessageCircle />,
    },
  ],
};
