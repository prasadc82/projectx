import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity, 
  View
} from 'react-native';

import Trip from './tripSelection.ios.js';
import Branding from './branding.ios.js';

export default class Home extends Component {  

  driverTripPage() {
    this.props.navigator.push({
        title: 'Trip Details',
        component: Trip,
    });
  };

  passengerTripPage() {
  }

  render() {
    let user = 'Prasad';

    return (
      <View style={styles.outer}>
        <Branding/>
        <View style={styles.greeting}>
          <Text style={styles.greetingtext}>
            Hello, {user}!
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Are you the Driver or Passenger?
          </Text>
          <TouchableOpacity
            onPress={() => this.driverTripPage()}
            >
            <Text style={[styles.buttontext, styles.driver]}>
              Driver
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.passengerTripPage()}
            >
          <Text style={[styles.buttontext, styles.passenger]}>
            Passenger
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer:{
    flex: 1,
    backgroundColor: '#c6d6f3',
  },
  buttontext: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#33353a',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'white',
  },
  greeting: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingtext: {
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Bold'
  },
  container: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  driver: {
    marginBottom: 25,
    marginTop: 25,
    width: 165,
  },
  passenger: {
    backgroundColor: '#ccc9c9',
    color: '#33353a'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'auto',
    margin: 10,
  },
});
