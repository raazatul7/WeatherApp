/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store/index';

LogBox.ignoreAllLogs(true);
class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Root);
