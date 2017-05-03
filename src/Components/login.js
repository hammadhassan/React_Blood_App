import React, { Component } from 'react';
import firebase from "firebase";
import { browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

class Login extends Component {
//     constructor(props) {
//     super(props);

//     this.state = {
//       value: 'Property Value',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       value: event.target.value,
//     });
//   };

    User(ev) {
        ev.preventDefault()
        let user = {
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
        //this.props.signInWithEmailAndPassword(user)
        firebase.auth().signInWithEmailAndPassword(user.email, user.pass)
        
        .then((user) => {
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
                <form onSubmit={this.User.bind(this)}>
                    <TextField ref="email" hintText="User Email"/><br />
                    <TextField type="password" ref="pass" hintText="Password"/><br />
                    <RaisedButton primary={true} style={style} type="button" value="login" label="Login" type="submit" />
                </form>
            </div>    
        );
    }
}
export default Login;