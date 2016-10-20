import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import {
  NavigatorIOS
} from 'react-native';


import Home from './../components/home.ios.js';

class AppContainer extends Component {
  constructor(props) {
    super(props)
  }  
  
  render() {
    return <NavigatorIOS
        initialRoute={{
        component: Home,
        title: 'Home',
        passProps: { ...this.props }
      }}
      style={{flex: 1}}
      />
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => mapStateToProps, mapDispatchToProps)(AppContainer);