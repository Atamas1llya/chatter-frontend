import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Icon from 'react-feather';
import { observer } from 'mobx-react';

import UserStore from '../../stores/UserStore';

import './style.less';

@observer
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
    const { routes } = this.props; // configurable

    if (expanded) {
      return (
        <div id="sidebar">
          <div className="sidebar-icons">
            <div className="sidebar-top">
              {
                routes.map((route, index) => (
                  <NavLink
                    to={route.to}
                    className="sidebar-icon"
                    activeClassName="active"
                    key={index}
                    {...route.params}
                  >
                    { route.icon }
                  </NavLink>
                ))
              }
            </div>
            <div className="sidebar-bottom">
              <div
                className="sidebar-icon"
                onClick={UserStore.handleLogout}
              >
                <Icon.LogOut />
              </div>
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
              {
                routes.map((route, index) => (
                  <NavLink
                    to={route.to}
                    className="sidebar-text"
                    key={index}
                    {...route.params}
                  >{ route.name }
                  </NavLink>
                ))
              }
              {/* <NavLink exact to="/home" className="sidebar-text">Home</NavLink>
              <NavLink to="/home/chat" className="sidebar-text">Chat</NavLink> */}
            </div>
            <div className="sidebar-bottom">
              <span
                className="sidebar-text"
                onClick={UserStore.handleLogout}
              > Log out
              </span>
              <span
                className="sidebar-text"
                onClick={this.toggle}
              > Toggle
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
              {
                routes.map((route, index) => (
                  <NavLink
                    to={route.to}
                    className="sidebar-icon"
                    activeClassName="active"
                    key={index}
                    {...route.params}
                  >
                    { route.icon }
                  </NavLink>
                ))
              }
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
