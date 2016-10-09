import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  DatePickerIOS
} from 'react-native';

import Branding from './branding.ios.js';

export default class PickUps extends Component {

  render () {
    return (
      <View style={styles.outer}>
        <Branding/>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#b1ccf7'
  }
});
