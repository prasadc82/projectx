import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  DatePickerIOS
} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import Branding from './branding.ios.js';

export default class PickUps extends Component {

  render () {
    return (
      <View style={styles.container}>
          <MapView
            provide={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      top: 40,
      left: 20,
      right: 20,
      bottom: 40,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 100,
      left: 0,
      right: 0,
      bottom: 150,
    },
});
