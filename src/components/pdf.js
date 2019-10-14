import React, { Component } from 'react';
import Pdf from 'react-native-pdf';
import { StyleSheet, Dimensions, Text, Platform, Button, TouchableOpacity, Linking, ScrollView } from 'react-native';


export default class PdfScreen extends Component {
    static navigationOptions = {
      title: 'Scanned Documents'
    };
  
    render() {
        let source = {uri:'https://mexicar.appspot.com/getpdf/SCAN-DOC-5d23c1ad303c4c128836f7de.pdf', cache:true};
  
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