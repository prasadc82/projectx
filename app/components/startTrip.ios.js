import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  DatePickerIOS,
  Heading
} from 'react-native';

import Branding from './branding.ios.js';
import EndTrip from './endTrip.ios.js';
import PickUps from './pickups.ios.js';

export default class StartTrip extends Component {

  constructor(props){
    super(props)

    if (!this.props.trip.trip.tripStartDateTime) {
      this.props.setTripStartDateTime(String(new Date()));
    }
  }

  onDateChange = (date) => {
    
    this.props.setTripStartDateTime(String(date));

    if(this.props.trip.tripType === 'Round Trip') {
      this.props.navigator.push({
          title: 'End Trip Details',
          component: EndTrip,
          passProps: {...this.props}
      });
    } else {
      this.props.navigator.push({
          title: 'Pick Ups',
          component: PickUps,
          passProps: {...this.props}
      });
    }
  }; 

  render () {
    return (
      <View style={styles.outer}>
        <Branding/>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>
            When are you planning
          </Text>
          <Text style={styles.text}>
            on leaving {this.props.startlocation}?
          </Text>
        </View>
        <View style={styles.datepicker}>
          <Text style={{
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'HelveticaNeue-Bold'
          }}>
           Departure Date:
          </Text>
          <DatePickerIOS
            date={new Date(this.props.trip.trip.tripStartDateTime)}
            mode="datetime"
            onDateChange={this.onDateChange}
          />        
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#c6d6f3'
  },
  textcontainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 18
  },
  datepicker: {
    flex: 0.55,
    justifyContent: 'flex-start'
  }
});
