import React, { Component } from 'react';
import firebase from "firebase";
import { browserHistory} from 'react-router';

class Login extends Component {
    User(ev) {
        ev.preventDefault()
        let user = {
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
        //this.props.signInWithEmailAndPassword(user)
        firebase.auth().signInWithEmailAndPassword(user.email, user.pass)
        
        .then((user) => {
                // console.log(user.refs.name);
                // console.log(user.refs.email);
                // console.log(user.refs.pass);
                browserHistory.push("/welcome")
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    render () {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="email" ref="email" placeholder="User Email"/>
                    <input type="password" ref="pass" placeholder="Password"/>
                    <input type="button" onClick={this.User.bind(this)} value="Login"/>
                </form>
            </div>    
        );
    }
}
export default Login;