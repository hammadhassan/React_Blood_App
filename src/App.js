import React, { Component } from 'react';
import Home from "./Home";
import Login from "./Components/login";
import SignUp from "./Components/signup";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Welcome from "./Components/welcome";

class App extends Component {
  render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                <Route path="/signup" component={SignUp} />
                    <IndexRoute component={Login} />
                    <Route path="/welcome" component={Welcome} />
                </Route>
            </Router>
        )
    }
}
export default App;