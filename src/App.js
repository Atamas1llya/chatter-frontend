import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiStore from './stores/UiStore';

import Loading from './components/Loading';

// import 'normalize.css';
import './styles';

@observer
export default class App extends Component {
  componentDidMount() {
    UiStore.loading = false;
  }

  render() {
    return (
      <div>
        { UiStore.loading && <Loading /> }
        { this.props.childen }
      </div>
    );
  }
}
