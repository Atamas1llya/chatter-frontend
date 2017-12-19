import { observable } from 'mobx';
import io from 'socket.io-client';

import UserStore from '../../../stores/UserStore';
import { apiHost } from '../../../config';

class Chat {
  constructor() {

  }

  init = () => {
    this.socket = io('http://127.0.0.1:8081', {
      query: {
        token: UserStore.token,
      },
    });

    this.socket.on('error', (message) => {
      console.warn(message);
    });

    this.socket.on('connected', () => {
      console.log('Connected!');
    });
  }

  destroy = () => {
    this.socket.disconnect();
    this.socket = null;
  }
}

const chat = window.Chat = new Chat();

export default chat;
