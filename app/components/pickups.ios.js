import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import Branding from './branding.ios.js';
import GoogleApi from './../lib/googleApi.js';

const timeout = 1000;
let animationTimeout;

export default class PickUps extends Component {

  constructor(props){
    let start = { key: 'start', title: 'Start', coordinate: {latitude: 33, longitude: -112}};
    let dest = { key: 'end', title: 'End', coordinate: {latitude: 34, longitude: -112}}, region = null;
    
    super(props)

    let self = this;
    let startposition = null;
    let destposition = null;

    console.log('props pickup')
    console.log(props)

    GoogleApi.geocodeAddress('AIzaSyDXt9TbRgjvXd_fq934ESi1-6jucbIIMdc', this.props.trip.tripStart).then(function(response){
      startposition = response[0].position;
      
      region = {
        latitude: startposition.lat,
        longitude: startposition.lng,
        latitudeDelta: 0.0912,
        longitudeDelta: 0.0421,
      };

      start =  {
        title: 'Start',
        key: 'start',
        coordinate: {
          latitude: startposition.lat,
          longitude: startposition.lng,
        }
      };
      
      self.setState({
        markers: [start, dest],
        region: region
      });
    });

    GoogleApi.geocodeAddress('AIzaSyDXt9TbRgjvXd_fq934ESi1-6jucbIIMdc', this.props.trip.tripDest).then(function(response){
      destposition = response[0].position;

      dest = {
        title: 'End',
        key: 'end',
        coordinate: {
          latitude: destposition.lat,
          longitude: destposition.lng,
        }
      };

      self.setState({
        markers: [start, dest],
        region: region
      });
    });

    region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0912,
      longitudeDelta: 0.0421,
    };

    this.state = {
      markers: [start, dest],
      region
    }
  }

  componentDidMount() {
    animationTimeout = setTimeout(() => {
      this.focus();
    }, timeout);
  }

  componentWillUnmount() {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
  }

  focusMap(markers, animated) {
    console.log(`Markers received to populate map: ${markers}`);
    this.map.fitToSuppliedMarkers(markers, animated);
  }

  focus() {
    animationTimeout = setTimeout(() => {
      this.focusMap([
        'start',
        'end',
      ], true);
    }, timeout);
  }

  
  render () {
    return (
      <View style={styles.container}>
          <MapView
            ref={ref => { this.map = ref; }}
            provide={PROVIDER_GOOGLE}
            region={this.state.region}
            style={styles.map}
            showsTraffic={true}
           >
          {this.state.markers.map(marker => (
              <MapView.Marker
                key={marker.key}
                identifier={marker.key}
                coordinate={marker.coordinate}
                title={marker.title}
              />
            ))}
           </MapView>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

// const styles = StyleSheet.create({
//   container: {
//       position: 'absolute',
//       top: 40,
//       left: 20,
//       right: 20,
//       bottom: 40,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       position: 'absolute',
//       top: 100,
//       left: 0,
//       right: 0,
//       bottom: 150,
//     },
// });
