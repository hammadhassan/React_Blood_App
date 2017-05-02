import React, { Component } from 'react';
import Login from "./Components/login";
import SignUp from "./Components/signup";
import firebase from "firebase";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import App from "./App";

var config = {
    apiKey: "AIzaSyADOf_hBs003Gy5eM5ClgtCtcXdT1XeRYg",
    authDomain: "react-blood-app-dc45a.firebaseapp.com",
    databaseURL: "https://react-blood-app-dc45a.firebaseio.com",
    projectId: "react-blood-app-dc45a",
    storageBucket: "react-blood-app-dc45a.appspot.com",
    messagingSenderId: "410364834554"
  };
  firebase.initializeApp(config);

class Home extends Component {
    render () {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Login}/>
                <Route path="signup" component={SignUp}/>
            </Router>
        );
    }
}

export default Home;