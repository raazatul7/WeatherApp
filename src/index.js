/**
 * @format
 * @flow strict-local
 * USE ENV
 * import {API_URL} from "@env"
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WeatherApp</Text>
      </View>
    );
  }
}
