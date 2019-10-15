import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { createStackNavigator } from  'react-navigation-stack';
import IOSIcon from "react-native-vector-icons/Ionicons";
// import MainScreen from "./MainScreen";
// import DetailScreen from "./DetailScreen";
import Recent from './RecentScanned';
import Scan from './Scan';
import Settings from './Settings'
import Owner from './Owner'
import MainScreen from './MainScreen'

const stackNav = createStackNavigator({

  Main : {
    screen: Owner,
    navigationOptions: ({navigation}) => ({
      title: "Main",
      headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Scan: {
    screen: Scan,
    navigationOptions: ({navigation}) => ({
      title: "Scan Doc",
    })     
  },
  Recent: {
    screen: Recent,
    navigationOptions: ({navigation}) => ({
      title: "Recent",
    })     
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: "Settings",
    })     
  },
});

export default stackNav;