import React, { Component } from 'react';
import firebase from "firebase";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// const style = {
//   margin: 12,
// };

class SignUp extends Component {

    newUser(ev) {
        ev.preventDefault()
        let user = {
            name: this.refs.name.getValue(),
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue()
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
                <form onSubmit={this.newUser.bind(this)}>
                        <TextField type="text" ref="name" hintText="User Name"/><br />
                        {/*<input type="text" ref="lName" placeholder="User First Last Name"/>*/}
                        <TextField type="email" ref="email" hintText="User Email" /><br />
                        <TextField type="password" ref="pass" hintText="Password" /><br />
                        <RaisedButton label="Sign Up" primary={true} type="button" />
                </form>
             </div>
        );
    }
}

SignUp.contextTypes = {
    router: React.PropTypes.object
}

export default SignUp;