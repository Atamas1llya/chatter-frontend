import React, { Component } from 'react';
import * as Icon from 'react-feather';
import getFormData from 'get-form-data';
import moment from 'moment';
import { observer } from 'mobx-react';

import './style';

import Chat from '../../store/index';

@observer
export default class Messages extends Component {
  handleSendMessage = (e) => {
    e.preventDefault();

    const message = getFormData(e.target);
    if (message.text.trim()) {
      e.target.reset();

      Chat.sendMessage(message);
    }
  }
  render() {
    return (
      <div id="messages">
        <form
          className="message-form"
          onSubmit={this.handleSendMessage}
        >
          <input type="text" name="text" placeholder="Write a message..." />
          <button type="submit">
            <Icon.ArrowRight />
          </button>
        </form>

        <div className="messages-list">
          {
            Chat.messages.map((message, index) => (
              <div className={`message ${message.own && 'own'}`} key={index}>
                <section>
                  <span><b>{ message.from }</b></span>
                  <span>{ moment(message.timestamp).format('HH:mm') }</span>
                </section>
                <section>
                  <span className="message-text">{message.message.text}</span>
                </section>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
