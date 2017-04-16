import React, { Component } from 'react';

class Login extends Component {
    User(ev) {
        ev.preventDefault()
        let user = {
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
        console.log(user);
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