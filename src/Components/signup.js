import React, { Component } from 'react';

class SignUp extends Component {
    newUser(ev) {
        ev.preventDefault()
        let user = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
        console.log(user);
        //this.props.signUpUser(user);
    }
    render () {
        return (
            <div>
                <h1>Sign UP</h1>
                <form>
                        <input type="text" ref="name" placeholder="User Name"/>
                        {/*<input type="text" ref="lName" placeholder="User First Last Name"/>*/}
                        <input type="email" ref="email" placeholder="User Email"/>
                        <input type="password" ref="pass" placeholder="Password"/>
                        <input type="button" onClick={this.newUser.bind(this)} value="Sign Up"/>
                </form>
             </div>
        );
    }
}
export default SignUp;