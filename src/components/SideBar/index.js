import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Icon from 'react-feather';

import './style.less';

export default class SideBar extends Component {
  state = {
    expanded: false,
  }


  toggle = () => {
    this.setState(prev => ({
      expanded: !prev.expanded,
    }));
  }


  render() {
    const { expanded } = this.state;

    if (expanded) {
      return (
        <div id="sidebar">
          <div className="sidebar-icons">
            <div className="sidebar-top">
              <NavLink
                exact
                to="/home"
                className="sidebar-icon"
                activeClassName="active"
              >
                <Icon.Home />
              </NavLink>
              <NavLink
                to="/home/chat"
                className="sidebar-icon"
                activeClassName="active"
              >
                <Icon.MessageCircle />
              </NavLink>
            </div>
            <div className="sidebar-bottom">
              <div
                className="sidebar-icon menu rotated"
                onClick={this.toggle}
              >
                <Icon.Menu />
              </div>
            </div>
          </div>
          <div className="sidebar-icons text">
            <div className="sidebar-top">
              <NavLink exact to="/home" className="sidebar-text">Home</NavLink>
              <NavLink to="/home/chat" className="sidebar-text">Chat</NavLink>
            </div>
            <div className="sidebar-bottom">
              <span
                className="sidebar-text"
                onClick={this.toggle}
              >Toggle
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="sidebar">
          <div className="sidebar-icons">
            <div className="sidebar-top">
              <NavLink
                exact
                to="/home"
                className="sidebar-icon"
                activeClassName="active"
              >
                <Icon.Home />
              </NavLink>
              <NavLink
                to="/home/chat"
                className="sidebar-icon"
                activeClassName="active"
              >
                <Icon.MessageCircle />
              </NavLink>
            </div>
            <div className="sidebar-bottom">
              <div
                className="sidebar-icon menu"
                onClick={this.toggle}
              >
                <Icon.Menu />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
