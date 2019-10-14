import React, { Component } from 'react';
import Pdf from 'react-native-pdf';
import { StyleSheet, Dimensions, Text, Platform, Button, TouchableOpacity, Linking, ScrollView } from 'react-native';


export default class PdfScreen extends Component {
    static navigationOptions = {
      title: 'PDF'
    };
  
    render() {
        let source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache:true};
  
      return <Pdf
                source={source}
                style={styles.pdf}
              />;
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width
    }
});