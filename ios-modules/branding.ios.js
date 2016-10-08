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
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#b1ccf7',
  },
  headertext: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Bold',
    textAlign: 'center',
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
});
