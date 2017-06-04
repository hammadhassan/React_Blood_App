import React, { Component } from 'react';
import Nav from "./Nav";
//import PropTypes from 'prop-types';

class Home extends Component {
    render () {
        return (
      <div>
          <Nav/>
           <h2>Welcome to React</h2>
           {this.props.children}
      </div>
        );
    }
}

export default Home;