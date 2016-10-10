import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Branding extends Component {  
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headertext}>
          SpareSeAT
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.25,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#c6d6f3',
  },
  headertext: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#33353a',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'white',
  },
});
