import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";

var config = {
    apiKey: "AIzaSyADOf_hBs003Gy5eM5ClgtCtcXdT1XeRYg",
    authDomain: "react-blood-app-dc45a.firebaseapp.com",
    databaseURL: "https://react-blood-app-dc45a.firebaseio.com",
    projectId: "react-blood-app-dc45a",
    storageBucket: "react-blood-app-dc45a.appspot.com",
    messagingSenderId: "410364834554"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);