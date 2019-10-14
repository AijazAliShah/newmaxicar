import React, { Component } from 'react';
import { Avatar } from 'react-native-paper';
import { StyleSheet, View, Text, Platform, Button, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { ListItem, Divider } from 'react-native-elements'
import { Spinner } from './common';

//redux
import { bindActionCreators } from "redux";
import { vehicleAsync } from "../store/actions";
import { connect } from "react-redux";
import axios from 'axios';
import Pdf from 'react-native-pdf';
import { Buffer } from 'buffer'
import {Dimensions} from 'react-native';
import PDFView from 'react-native-view-pdf';

// var Buffer = require('buffer').Buffer
let source='';
const resources = {
    file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
    url: 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf',
    base64: 'JVBERi0xLjMKJcfs...',
  };

class Vehicle extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() {

        super();

        this.state = {
            // pdf: ""
            show: false
        };
        this.pdf = null;

    }

    componentWillMount(){
        this.setState({show: false});
        source='';
    }
    
    componentWillUnmount(){
        this.setState({show: false});
        source='';
    }
     componentDidMount() {

        // source = {uri:'https://mexicar.appspot.com/getpdf/SCAN-DOC-5d23c1ad303c4c128836f7de.pdf',cache:true};
        //     this.setState({pdf: source});
    }
    handlePress (){
        this.setState({show: !this.state.show})
        source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:false};
    }


    render() {
        // const resourceType = 'base64';
        // let source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:false};
        // this.setState({pdf: source});

        return (

            <View style={styles.container}>
                <Text style={styles.textStyle}>Scanned Documents</Text>
                <Button
                    onPress = {this.handlePress.bind(this)}
                    title = {this.state.show ? "Hide!" : "Show!"}
                    color = "blue"
                />
                {this.state.show ? (
                <Pdf
                    ref={(pdf)=>{this.pdf = pdf}}
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
                    ): null}
            </View>
        //     <View style={{ flex: 1 }}>
        //     {/* Some Controls to change PDF resource */}
        //     <PDFView
        //       fadeInDuration={250.0}
        //       style={{ flex: 1 }}
        //       resource={resources[resourceType]}
        //       resourceType={resourceType}
        //       onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
        //       onError={(error) => console.log('Cannot render PDF', error)}
        //     />
        //   </View>

        //     <View style={{ flex: 1 }}>
        //     {/* Some Controls to change PDF resource */}
        //     <Text>Hello</Text>
        //     {/* <Image
        //         style={{width: 100, height: 100}}
        //         source={{uri: `data:image/gif;base64,${this.state.picture}`}}
        //     /> */}
        //     <PDFView
        //       fadeInDuration={250.0}
        //       style={{ flex: 1 }}
        //       resource={resources[resourceType]}
        //       resourceType={resourceType}
        //       onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
        //       onError={(error) => console.log('Cannot render PDF', error)}
        //     />
        //   </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width: Dimensions.get('window').width,
    },
    textStyle: {
        fontSize: 32,
        alignSelf: 'center',
        color: '#0095cd'
    }
});

const mapStateToProps = state => ({
    vehicle: state.vehicle.vehicleEntity,
});
const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators(
        {
            vehicleAsync,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vehicle);