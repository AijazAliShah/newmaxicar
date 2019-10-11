// import React, { Component } from 'react';

// import { StyleSheet, View, Dimensions} from 'react-native';
// import {  Spinner } from './common';

// // import { CameraKitCameraScreen , CameraKitCamera} from 'react-native-camera-kit';

// //redux
// import { bindActionCreators } from "redux";
// import { ownerAsync } from "../store/actions";
// import { getOwnersDataAsync } from "../store/actions";
// import { getPoliceDataAsync } from "../store/actions";
// import { invoiceAsync } from "../store/actions";
// import { vehicleAsync } from "../store/actions";
// import { connect } from "react-redux";

// import { RNCamera } from 'react-native-camera';


// class QRScanner extends Component {
//   static navigationOptions = {
//     header: null
//   }

//   constructor() {
//     super();
//     this.state = {
//       QR_Code_Value: '',
//       Start_Scanner: false,
//       loading: false,
//       result: ''
//     };
//   } 



//    onQR_Code_Scan_Done (QR_Code){
//     // this.setState({ QR_Code_Value: QR_Code });
//     // this.setState({ Start_Scanner: false, loading: false});
//     // console.log("this.state.QR_Code_Value")
//     // console.log(this.state.QR_Code_Value)

//     console.log("hello")
//      res = QR_Code.split("-");
//     // console.log(res)
//      this.callData(res)
//     // if( this.state.QR_Code_Value) {
        
//     // }

   
//     // if( this.state.QR_Code_Value && (this.state.count > 0)) {
//     // this.props.navigation.navigate('MainScreen', { qrCodeValue: this.state.QR_Code_Value , name: 'AIjaz anas' })
//     // }
//   }

//    callData(res){
//      this.props.ownerAsync(res[0]);
//      this.props.vehicleAsync(res[1]);
//      this.props.invoiceAsync(res[0]);
//      this.props.navigation.navigate('MainScreen', { qrCodeValue: this.state.QR_Code_Value })
//   }

//   onSuccess = (e) => {
//     // Linking
//     //   .openURL(e.data)
//     //   .catch(err => console.error('An error occured', err));
//     console.log("scan rese: ",e.data)
//   }

//   barcodeRecognized = (data) => {
//     console.log("in function", data.data)
//   };

//   render() {
//     console.log("agyaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//     const { height, width } = Dimensions.get('window');
//     const maskRowHeight = Math.round((height - 300) / 20);
//     const maskColWidth = (width - 300) / 2;

//     return (
//       <View style={styles.container}>
//       <RNCamera style={styles.camera}
//         ref={ref => {
//           this.camera = ref;
//         }}
//         style={{
//           flex: 1
//         }}
//         onBarCodeRead={this.barcodeRecognized.bind(this)}
//         barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
//       >
//         <View style={styles.maskOutter}>
//           <View style={[{ flex: maskRowHeight  }, styles.maskRow, styles.maskFrame]} />
//            <View style={[{ flex: 30 }, styles.maskCenter]}>
//            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
//            <View style={styles.maskInner} />
//           <View style={[{ width: maskColWidth }, styles.maskFrame]} />
//         </View>
//       <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
//     </View>
//       </RNCamera>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   cameraView: {
//     flex: 1,
//     justifyContent: 'flex-start',
//   },
//   maskOutter: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   maskInner: {
//     width: 300,
//     backgroundColor: 'transparent',
//     borderColor: 'white',
//     borderWidth: 1,
//   },
//   maskFrame: {
//     backgroundColor: 'rgba(1,1,1,0.6)',
//   },
//   maskRow: {
//     width: '100%',
//   },
//   maskCenter: { flexDirection: 'row' },
// });

// const mapStateToProps = state => ({
//   owner: state.owner.ownerEntity,
//   owners: state.ownersData.ownersEntities
// });
// const mapDispatchToProps = (dispatch, ownProps) =>
//   bindActionCreators(
//     {
//       ownerAsync,
//       getOwnersDataAsync,
//       getPoliceDataAsync,
//       vehicleAsync,
//       invoiceAsync
//     },
//     dispatch
//   );

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(QRScanner);



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { RNCamera } from 'react-native-camera';
import {View, Image, StyleSheet, Dimensions} from 'react-native'

class QRScanner extends Component {

  barcodeRecognized = (data) => {
    console.log("in function", data.data)
    res = data.data.split("-");
    this.props.ownerAsync(res[0]);
     this.props.vehicleAsync(res[1]);
     this.props.invoiceAsync(res[0]);
    //  this.props.navigation.navigate('MainScreen', { qrCodeValue: this.state.QR_Code_Value })
  };

  render() {
    const { height, width } = Dimensions.get('window');
    const maskRowHeight = Math.round((height - 300) / 20);
    const maskColWidth = (width - 300) / 2;

  return (
    <View style={styles.container}>
        <RNCamera style={styles.camera}
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1
          }}
          onBarCodeRead={this.barcodeRecognized.bind(this)}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
        >
          <View style={styles.maskOutter}>
            <View style={[{ flex: maskRowHeight  }, styles.maskRow, styles.maskFrame]} />
             <View style={[{ flex: 30 }, styles.maskCenter]}>
             <View style={[{ width: maskColWidth }, styles.maskFrame]} />
             <View style={styles.maskInner} />
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
          </View>
        <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
      </View>
        </RNCamera>

        </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: { flexDirection: 'row' },
});

export default QRScanner;
