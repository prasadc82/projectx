import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity, 
  View
} from 'react-native';

import PassengerDetails from './passengerDetails.ios.js';
import Branding from './branding.ios.js';
import GoogleApi from './../lib/googleApi.js';

export default class PassengerBoarding extends Component {

  constructor(props){
    super(props)
  }

  next() {
    this.props.navigator.push({
        title: 'Passenger Details',
        component: PassengerDetails,
        passProps: {...this.props}
    });
  }

  currentLocation() {
    console.log(navigator);
    navigator.geolocation.getCurrentPosition(
      (location) => {
        GoogleApi.geocodePosition('AIzaSyDXt9TbRgjvXd_fq934ESi1-6jucbIIMdc', location.coords).then((response) => {
          console.log('Passenger Point', response);
          this.props.setTripPoint(response[0].formattedAddress);

          this.next();
        });
      },
      (error) => {
        console.log(error);
      }, 
      { 
         enableHighAccuracy: true,
         timeout: 20000,
         maximumAge: 1000
      }
    );
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
          <TouchableOpacity
            onPress={() => this.currentLocation()}
           >
            <Text style={styles.buttontext}>
                Pick me up here!
            </Text>
          </TouchableOpacity>
        <Text style={styles.or}>
            Or
        </Text>
          <TouchableOpacity
           onPress={() => this.next()}
           >
            <Text style={styles.location}>
                Different Location
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
    backgroundColor: '#62BF8E',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
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
  or: {
    marginBottom: 25,
    marginTop: 25,
    fontSize: 20,
  },
  location: {
    backgroundColor: '#ccc9c9',
    color: '#33353a',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
});
