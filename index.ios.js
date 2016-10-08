import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';

import Home from './ios-modules/home.ios.js'; 

export default class spareseat extends Component {  
  render() {
    return (
      <NavigatorIOS
          initialRoute={{
          component: Home,
          title: 'Home',
          navigationBarHidden: true,
        }}
        style={{flex: 1}}
        />
    );
  }
}

AppRegistry.registerComponent('spareseat', () => spareseat);
