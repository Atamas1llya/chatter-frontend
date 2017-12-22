import { observable } from 'mobx';
import io from 'socket.io-client';

import UserStore from '../../../stores/UserStore';
import { apiHost } from '../../../config';

class Chat {
  @observable messages = [];

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

    this.socket.on('new_message', (message) => {
      this.messages.push(message);
    });
  }

  destroy = () => {
    this.socket.disconnect();
    this.socket = null;
  }

  sendMessage = (message) => {
    this.messages.push({
      from: UserStore.profile.local.email,
      own: true,
      message,
      timestamp: Date.now(),
    });
    this.socket.emit('new_message', message);
  }
}

const chat = window.Chat = new Chat();

export default chat;
