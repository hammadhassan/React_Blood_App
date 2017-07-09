import React, { Component } from 'react';
//import firebase from "firebase";
import { browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import { FirebaseAuthService } from '../store/authMiddleware'
import CircularProgress from 'material-ui/CircularProgress';

class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

    componentWillReceiveProps(nextProp) {
        if (nextProp.isLoggedin) {
            browserHistory.push('/welcome')
        }
    }

    User(ev) {
        ev.preventDefault()
        let user = {
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue()
        }
    this.setState({
      loading: true,
    })
       this.props.loginWithFirebase(user)
       //.then(this.nowLoginSuccess());
       alert("User");
    }
  nowLoginSuccess() {
        this.setState({ email: '', password: '', loading: false })
    }

    renderButtonAndLoader() {
        if (this.state.loading) {
            return <CircularProgress />,
            alert("CircularProgress")
        }
        return (
            <RaisedButton value="Login" onPress={this.User.bind(this)} />,
            alert("Hello")
        )
    }
    render () {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.User.bind(this)}>
                    <TextField ref="email" hintText="User Email"/><br />
                    <TextField type="password" ref="pass" hintText="Password"/><br />
                    <RaisedButton primary={true} value="login" label="Login" type="submit" />
                    {/*<CircularProgress />*/}
                </form>
            </div>    
        );
    }
}

const CircularProgressExampleSimple = () => (
  <div>
    <CircularProgress />
  </div>
)

const mapStateToProps = (state) => {
    return {
        isLoggedin: state.isLoggedin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginWithFirebase: (user) => {
            dispatch(FirebaseAuthService.loginOnFirebase(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)