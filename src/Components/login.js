import React, { Component } from 'react';
import firebase from "firebase";
import { browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import { connect } from 'react-redux'
//import { FirebaseAuthService } from '../store/authMiddleware'


const style = {
  margin: 12,
};

class Login extends Component {
//     constructor(props) {
//     super(props);
    componentWillReceiveProps(nextProp) {
        if (nextProp.isLoggedin) {
            browserHistory.push('/home')
        }
    }

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
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue()
        }
       //this.props.loginWithFirebase(user)
       // this.props.signInWithEmailAndPassword(user)
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
                    <RaisedButton primary={true} style={style} value="login" label="Login" type="submit" />
                </form>
            </div>    
        );
    }
}
export default Login;

// const mapStateToProps = (state) => {
//     return {
//         isLoggedin: state.isLoggedin
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loginWithFirebase: (user) => {
//             dispatch(FirebaseAuthService.loginOnFirebase(user))
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Login)