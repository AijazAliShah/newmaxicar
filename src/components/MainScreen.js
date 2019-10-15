import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Spinner } from './common';
import Settings from './Settings'
import Owner from './Owner'
import Vehicle from './Vehicle';
import HomeSc from './HomeScreen';
import Invoice from './Invoice';
import Recent from './RecentScanned';
import Scan from './Scan';
import stackNav from './stacknav';

//redux
import { bindActionCreators } from "redux";
import { ownerAsync } from "../store/actions";
import { getOwnersDataAsync } from "../store/actions";
import { getPoliceDataAsync } from "../store/actions";
import { invoiceAsync } from "../store/actions";
import { vehicleAsync } from "../store/actions";
import { connect } from "react-redux";
import { DrawerNavigator } from 'react-navigation';
var res = [];


// const Drawernav = DrawerNavigator({
//   Item1: {
//       screen: stackNav,
//     }
//   }, {
//     // contentComponent: SideMenu,
//     drawerWidth: Dimensions.get('window').width - 120,  
// });


class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {

    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'owner', title: 'Owner', icon: 'person', color: '#0095cd' },
        { key: 'vehicle', title: 'Vehicle', icon: 'album', color: '#0095cd' },
        { key: 'invoice', title: 'Invoice', icon: 'shopping-cart', color: '#0095cd' },
        { key: 'scanFile', title: 'Scan File', icon: 'shopping-cart', color: '#0095cd' },
        { key: 'qrscanner', title: 'Scanner', icon: 'camera', color: '#0095cd' },
        { key: 'recent', title: 'Recent', icon: 'history', color: '#0095cd' },
        { key: 'setting', title: 'Settings', icon: 'settings', color: '#0095cd' },
      ],
      QR_Code_Value: '',
      Start_Scanner: false,
      ids: props.navigation.getParam('qrCodeValue', 'NO-ID'),
      pdf: "",
      count: 0
    };
  }



  QRScannerRoute = () => <HomeSc navigation={this.props.navigation} />
  OwnersRoute = () => <Owner navigation={this.props.navigation} ids={this.state.ids} />
  VehcilesRoute = () => <Vehicle navigation={this.props.navigation} />
  InvoicesRoute = () => <Invoice navigation={this.props.navigation} />;
  ScanRoute = () => <Scan navigation={this.props.navigation} pdf={this.state.pdf} />;
  RecentRoute = () => <Recent navigation={this.props.navigation} />;
  SettingssRoute = () => <Settings navigation={this.props.navigation} />;

  _handleIndexChange = index => this.setState({ index });
 
  _renderScene = BottomNavigation.SceneMap({
    owner: this.OwnersRoute,
    vehicle: this.VehcilesRoute,
    qrscanner: this.QRScannerRoute,
    invoice: this.InvoicesRoute,
    scanFile: this.ScanRoute,
    recent: this.RecentRoute,
    setting: this.SettingssRoute,
  });

  async componentWillMount() {
    
    const QRValue = this.props.navigation.getParam('qrCodeValue', 'NO-ID');
    console.log("saaaaaaaaaaaaaaaaadddddddsddddddaaaaaaa")
    console.log(QRValue)
    console.log("anssssssssssssssssssssssssssssssssssssss33333344444444444443")
    res = QRValue.split("-");
    console.log(res)
    await this.props.getPoliceDataAsync();
    const source = {uri:'http://192.168.0.102:5000/getpdf/SCAN-DOC-5d23c1ad303c4c128836f7de.pdf',cache:true};
    this.setState({pdf: source});
  }



  render() {

    return (
      // <View>
      //  <Drawernav />
       <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        /> 
     
    );

  }
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QR_text: {
    color: '#000',
    fontSize: 19,
    padding: 8,
    marginTop: 12
  },
  button: {
    backgroundColor: '#2979FF',
    alignItems: 'center',
    padding: 12,
    width: 300,
    marginTop: 14
  },
});

const mapStateToProps = state => ({
  owner: state.owner.ownerEntity,
  owners: state.ownersData.ownersEntities
});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      ownerAsync,
      getOwnersDataAsync,
      getPoliceDataAsync,
      vehicleAsync,
      invoiceAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);