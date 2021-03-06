import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity, 
  TextInput,
  View
} from 'react-native';

import { Control, Errors } from 'react-redux-form/native';

import Branding from './branding.ios.js';
import TripStart from './startTrip.ios.js';

const isRequired = (val) => val && val.length > 0;

const styles = StyleSheet.create({
  outer:{
    flex: 1,
    backgroundColor: '#c6d6f3',
  },
  greeting: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingtext: {
    fontSize: 22,
    fontFamily: 'HelveticaNeue-Bold'
  },
  source: {
    flex: 0.35,
    justifyContent: 'flex-end',
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
    backgroundColor: '#ccc9c9',
    borderWidth: 1
  },
  text: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Bold'
  },
  textDest: {
    marginTop: 10
  },
  tripText: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tripButtonsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  tripButton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#a59898',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'white',   
  },
  roundtripButton: {
    marginLeft: 10,
    backgroundColor: '#3c3636',
  }
});

export default class Trip extends Component {
  
  constructor(props) {
    super(props)
  }

  oneWay() {

    this.props.setTouched('deep.trip.tripStart', true );    
    this.props.setTouched('deep.trip.tripDest', true );
    
    if (!this.props.trip.tripStart) {
      return;
    }
    
    this.props.setTripType('One Way');
    this.props.navigator.push({
        title: 'Trip Start Details',
        component: TripStart,
        passProps: {...this.props}
    });    
  }

  roundTrip() {

    this.props.setTouched('deep.trip.tripStart', true );
    this.props.setTouched('deep.trip.tripDest', true );

    if (!(this.props.trip.tripStart && this.props.trip.tripDest)) {
      return;
    }
    
    this.props.setTripType('Round Trip');
    this.props.navigator.push({
        title: 'Trip Start Details',
        component: TripStart,
        passProps: {...this.props}
    });    
  }

  handleSubmit(data){
    console.log('handle submit');
    console.log(data);
  };
  
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
          <Text style={styles.text}>
            Where are you departing from?
          </Text>
          <Control.TextInput 
            style={styles.textInput}
            name="tripStart"
            model="deep.trip.tripStart"
            validators={{isRequired}}
            placeholder="LA"/>
            <Errors
              show={{ touched: true, focus: false }}
              model="deep.trip.tripStart"
              messages={{
                isRequired: 'Please provide a trip start location.',
              }}/>            
          <Text style={[styles.text, styles.textDest]}>
            Where are you travelling to?
          </Text>
          <Control.TextInput
            name="tripDest"
            style={styles.textInput}
            model="deep.trip.tripDest"
            validators={{isRequired}}
            placeholder="Phoneix"/>
            <Errors
              show={{ touched: true, focus: false }}
              model="deep.trip.tripDest"
              messages={{
                isRequired: 'Please provide a trip end location.',
              }}/>
        </View>
        <View style={styles.tripText}>
          <Text style={styles.text}>
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
