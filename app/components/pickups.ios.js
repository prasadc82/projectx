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
        <View style={{flex: 0.75}}>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#c6d6f3'
  }
});
