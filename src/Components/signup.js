import React, { Component } from 'react';
import firebase from "firebase";

class SignUp extends Component {

    newUser(ev) {
        ev.preventDefault()
        let user = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
            //this.props.createUserWithEmailAndPassword(user)
        console.log(user);
        //this.props.newUser(user);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }
    render () {
        return (
            <div>
                <h1>SignUp</h1>
                <form>
                        <input type="text" ref="name" placeholder="User Name"/>
                        {/*<input type="text" ref="lName" placeholder="User First Last Name"/>*/}
                        <input type="email" ref="email" placeholder="User Email" default="h@gmail.com"/>
                        <input type="password" ref="pass" placeholder="Password" default="123456" />
                        <input type="button" onClick={this.newUser.bind(this)} value="Sign Up"/>
                </form>
             </div>
        );
    }
}

SignUp.contextTypes = {
    router: React.PropTypes.object
}

export default SignUp;