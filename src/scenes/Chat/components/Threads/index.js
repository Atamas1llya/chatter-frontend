import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './style';

export default class Threads extends Component {
  render() {
    return (
      <div id="threads">
        <NavLink
          to="/home/threads/elon_musk_id"
          className="thread-item"
          activeClassName="active"
        >
          <section>
            <span className="thread-title"><b>Elon Musk</b></span>
            <span>12:28</span>
          </section>
          <section>
            <span>Hello! How are you?</span>
            <span />
          </section>
        </NavLink>

        <NavLink
          to="/home/threads/mark_zuckerberg_id"
          className="thread-item"
          activeClassName="active"
        >
          <section>
            <span className="thread-title"><b>Mark Zuckerberg</b></span>
            <span>13:56</span>
          </section>
          <section>
            <span>Ha.. It would be great! But is this possible? </span>
            <span />
          </section>
        </NavLink>
      </div>
    );
  }
}
