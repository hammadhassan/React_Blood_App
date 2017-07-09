import React, { Component } from 'react';
//import firebase from "firebase";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import { FirebaseAuthService } from '../store/authMiddleware'
import { browserHistory } from "react-router";

class SignUp extends Component {

    componentWillReceiveProps(nextProp) {
        if (nextProp.isRegistered) {
            browserHistory.push('/login')
        }
    }

    newUser(ev) {
        ev.preventDefault()
        let user = {
            name: this.refs.name.getValue(),
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue()
        }
            this.props.signUpUser(user)
    }
    render () {
        return (
            <div>
                <h1>SignUp</h1>
                <form onSubmit={this.newUser.bind(this)}>
                        <TextField type="text" ref="name" hintText="User Name"/><br />
                        <TextField type="email" ref="email" hintText="User Email" /><br />
                        <TextField type="password" ref="pass" hintText="Password" /><br />
                        <RaisedButton label="Sign Up" primary={true} type="submit"/>
                </form>
             </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedin: state.isLoggedin,
        isRegistered: state.isRegistered
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (userAuth) => {
            dispatch(FirebaseAuthService.registerUserOnFirebase(userAuth))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)