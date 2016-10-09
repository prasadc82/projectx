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

  static defaultProps = {
    date: new Date()
  };

  state = {
    date: this.props.date
  };

  onDateChange = (date) => {
    this.setState({date: date});

    if(this.props.destLocation) {
      this.props.navigator.push({
          title: 'End Trip Details',
          component: EndTrip,
          passProps: { destLocation: this.props.destLocation }
      });
    } else {
      this.props.navigator.push({
          title: 'Pick Ups',
          component: PickUps
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
            date={this.state.date}
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
    backgroundColor: '#b1ccf7'
  },
  textcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 18
  },
  datepicker: {
    flex: 3,
    justifyContent: 'flex-start'
  }
});
