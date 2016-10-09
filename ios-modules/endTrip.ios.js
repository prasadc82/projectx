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

  static defaultProps = {
    date: new Date()
  };

  state = {
    date: this.props.date
  };

  onDateChange = (date) => {
    this.setState({date: date});
    
    this.props.navigator.push({
        title: 'Pick Ups',
        component: PickUps
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
  }
});
