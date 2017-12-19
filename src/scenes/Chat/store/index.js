import { observable } from 'mobx';
import io from 'socket.io-client';

import UserStore from '../../../stores/UserStore';
import { apiHost } from '../../../config';

class Chat {
  constructor() {

  }

  init = () => {
    this.socket = io(apiHost, {
      path: '/chat',
    });
    console.log(this.socket);
  }

  destroy = () => {
    this.socket.disconnect();
    this.socket = null;
  }
}

const chat = window.Chat = new Chat();

export default chat;
