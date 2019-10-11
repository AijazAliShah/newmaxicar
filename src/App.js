import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';

import store from "./store";

import { Provider, connect } from 'react-redux';
import AppContainer from './AppContainer';



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
