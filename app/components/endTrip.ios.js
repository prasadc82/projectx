import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  DatePickerIOS
} from 'react-native';

import Branding from './branding.ios.js';
import PickUps from './pickups.ios.js';

export default class EndTrip extends Component {

  constructor(props){
    super(props)

    if (!this.props.trip.tripReturnDateTime){
      this.props.setTripReturnDateTime(String(new Date()));
    }
  }

  onDateChange = (date) => {
    this.props.setTripReturnDateTime(String(date));
    
    this.props.navigator.push({
        title: 'Pick Ups',
        component: PickUps,
        passProps: {...this.props}
    });
  };  

  render () {
    return (
      <View style={styles.outer}>
        <Branding/>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>
            And, When you planning
          </Text>
          <Text style={styles.text}>
            leaving {this.props.destLocation}?
          </Text>
        </View>
        <View style={styles.datepicker}>
          <Text style={{
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'HelveticaNeue-Bold'
          }}>
           Return Date:
          </Text>
          <DatePickerIOS
            date={new Date(this.props.trip.tripReturnDateTime)}
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
  }
});
