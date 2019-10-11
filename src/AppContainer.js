import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Linking } from 'react-native';
import firebase from 'firebase';
import {createAppContainer, createBottomTabNavigator,} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import HomeScreen from './components/HomeScreen'
import QRScanner from './components/QRScanner'
import MainScreen from './components/MainScreen'
import BottomNavigator from './components/BottomNavigator'
import Settings from './components/Settings'
import Owner from './components/Owner'
import RecentScanned from './components/RecentScanned'

const MainNavigator = createStackNavigator({
  Login: LoginForm,
  Signup: SignupForm,
  HomeSc: HomeScreen,
  QRScanner: QRScanner,
  MainScreen: MainScreen,
  BottomNavigator: BottomNavigator,
  Settings: Settings,
  Owner: Owner,
  RecentScanned: RecentScanned
});

 const AppContainer = createAppContainer(MainNavigator);



export default AppContainer;
