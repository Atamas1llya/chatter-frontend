import React, { Component } from 'react';

import './style';

export default class Threads extends Component {
  render() {
    return (
      <div id="threads">
        <div className="thread-item">
          <section>
            <span className="thread-title"><b>Elon Musk</b></span>
            <span>12:28</span>
          </section>
          <section>
            <span>Hello! How are you?</span>
            <span></span>
          </section>
        </div>

        <div className="thread-item">
          <section>
            <span className="thread-title"><b>Mark Zuckerberg</b></span>
            <span>13:56</span>
          </section>
          <section>
            <span>Ha.. It would be great! But is this possible? </span>
            <span></span>
          </section>
        </div>
      </div>
    )
  }
}
