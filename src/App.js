import React, { Component } from 'react';
import Home from "./Home";
var {Link, IndexLink} = require("react-router");

class App extends Component {
  render() {
    return (
      <div>
          <h2>Welcome to Blood App</h2>
          <Home/>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
          <Link to="/login" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</Link>
          <Link to="/signup" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Sign Up</Link>
      </div>
    );
  }
}

export default App;
