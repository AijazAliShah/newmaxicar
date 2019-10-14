import firebase from 'firebase';

const config={
    apiKey: "AIzaSyDYg6dhnjGXu0fn5DZ8PPE16C99eiBmLqc",
    authDomain: "rnauthapp-e84d1.firebaseapp.com",
    databaseURL: "https://rnauthapp-e84d1.firebaseio.com",
    projectId: "rnauthapp-e84d1",
    storageBucket: "rnauthapp-e84d1.appspot.com",
    messagingSenderId: "685951200040",
    appId: "1:685951200040:web:bef2d64dd3509ab5"
}

const Firebase = firebase.initializeApp(config);

export default Firebase;
