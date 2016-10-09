import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity, 
  TextInput,
  View
} from 'react-native';

import Branding from './branding.ios.js';
import TripStart from './startTrip.ios.js';

export default class Trip extends Component {  
  
  oneWay() {
    this.props.navigator.push({
        title: 'Trip Start Details',
        component: TripStart,
        passProps: { startlocation:  'New York' }
    });    
  }

  roundTrip() {
    this.props.navigator.push({
        title: 'Trip Start Details',
        component: TripStart,
        passProps: { startlocation:  'New York', destLocation: 'Buffalo' }
    });    
  }
  
  render() {
    let user = 'Prasad';

    return (
      <View style={styles.outer}>
        <Branding/>
        <View style={styles.greeting}>
          <Text style={styles.greetingtext}>
            Ok, great! Tell us a little bit 
          </Text>
          <Text style={styles.greetingtext}>
            about your trip 
          </Text>
        </View>
        <View style={styles.source}>
          <Text>
            Where are you departing from?
          </Text>
          <TextInput
           style={styles.textInput}
           placeholder="New York"
          >
          </TextInput>
          <Text>
            Where are you travelling to?
          </Text>
          <TextInput
           style={styles.textInput}
           placeholder="Buffalo"
          >
          </TextInput>
        </View>
        <View style={styles.tripText}>
          <Text>
            Is this one-way or round-trip?
          </Text>
        </View>
        <View style={styles.tripButtonsContainer}>
          <TouchableOpacity
           onPress={() => this.oneWay()}
          >
            <Text style={styles.tripButton}>
              One way
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.roundTrip()}
          >
            <Text style={[styles.tripButton, styles.roundtripButton]}>
              Round Trip
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
    backgroundColor: '#b1ccf7',
  },
  greeting: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingtext: {
    fontSize: 22,
    fontFamily: 'HelveticaNeue-Bold'
  },
  source: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    color: 'black',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    borderColor: 'gray',
    backgroundColor: '#9a9292',
    borderWidth: 1
  },
  tripText: {
    flex: 1,
    backgroundColor: '#b1ccf7',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tripButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#b1ccf7',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  tripButton: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#475d67',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'white',   
  },
  roundtripButton: {
    marginLeft: 10
  }
});
