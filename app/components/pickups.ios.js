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

import mapIcon from './../assets/map-icon.svg';

var Polyline = require('polyline');

const timeout = 1000;
const timeout_directions = 2000;
let animationTimeout;

export default class PickUps extends Component {

  constructor(props){
    let start = { key: 'start', title: 'Start', coordinate: {latitude: 33, longitude: -112}};
    let dest = { key: 'end', title: 'End', coordinate: {latitude: 34, longitude: -112}}, region = null;
    let polylineCoords = [];
    
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
        region: region,
        polylineCoords
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

      self.setDirections();
    });

    region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0912,
      longitudeDelta: 0.0421,
    };

    this.state = {
      markers: [start, dest],
      region,
      polylineCoords
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
    console.log(this.map);
    this.map.fitToSuppliedMarkers(markers, animated);
  }

  setDirections() {
    let self = this;
    let start = this.state.markers[0];
    let dest = this.state.markers[1];
    let region = this.state.region;
    
    GoogleApi.directions('AIzaSyDXt9TbRgjvXd_fq934ESi1-6jucbIIMdc', this.props.trip.tripStart, this.props.trip.tripDest).then(function(response){
      let points = response.routes[0].overview_polyline.points;
      let steps = Polyline.decode(points);
      let polylineCoords = [];

      for (let i=0; i < steps.length; i++) {
        let tempLocation = {
          latitude : steps[i][0],
          longitude : steps[i][1]
        }
        polylineCoords.push(tempLocation);
      }
        self.setState({
          markers: [start, dest],
          region: region,
          polylineCoords: polylineCoords
        });
    });
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
          <MapView.Polyline
              coordinates={this.state.polylineCoords}
              strokeWidth={3}
              strokeColor="blue"
            />
          {this.state.markers.map(marker => (
              <MapView.Marker
                key={marker.key}
                identifier={marker.key}
                // image={mapIcon}
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
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    top: 40,
    bottom: 40
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
