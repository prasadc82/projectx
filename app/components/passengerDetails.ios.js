import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity, 
  View
} from 'react-native';

import Branding from './branding.ios.js';
import GoogleApi from './../lib/googleApi.js';

export default class PassengerDetails extends Component {

  constructor(props){
    super(props)
  }

  render() {
    let user = 'Lokesh';
    return (
      <View style={styles.outer}>
        <Branding/>
        <View style={styles.greeting}>
          <Text style={styles.greetingtext}>
            Hello, {user} Rider!
          </Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter Pick-Up Location"
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter Destination"
          />
        </View>
        <View style={styles.next}>
          <TouchableOpacity>
            <Text style={styles.buttontext}>
              Confirm Ride
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
    height: 40,
    fontFamily: 'HelveticaNeue-Bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#62BF8E',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    width: 200,
  },
  greeting: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingtext: {
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Bold'
  },
  container: {
    flex: 0.15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#ccc9c9',
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    padding: 20
  },
  next: {
    flex: 0.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});
