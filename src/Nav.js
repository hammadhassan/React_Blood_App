import React, { Component } from 'react';
//import Home from "./Home";
import {Link, IndexLink} from "react-router";

class Nav extends Component {
    render () {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home or Login</IndexLink>
      <Link to="/signup" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>SignUp</Link>
      {/*<Link to="/login" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</Link>*/}
    </div>
  );
};
}

export default Nav;
