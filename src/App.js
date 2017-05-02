import React, { Component } from 'react';
import Home from "./Home";
import Login from "./Components/login";
import SignUp from "./Components/signup";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class App extends Component {
  render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                <Route path="/signup" component={SignUp} />
                    <IndexRoute component={Login} />
                </Route>
            </Router>
        )
    }
}
export default App;