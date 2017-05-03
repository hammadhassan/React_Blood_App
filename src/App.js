import React, { Component } from 'react';
import Home from "./Home";
import Login from "./Components/login";
import SignUp from "./Components/signup";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Welcome from "./Components/welcome";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyAwesomeReactComponent from './MyAwesomeReactComponent';

class App extends Component {
  render() {
        return (
            <MuiThemeProvider>
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                <Route path="/signup" component={SignUp} />
                    <IndexRoute component={Login} />
                    <Route path="/welcome" component={Welcome} />
                </Route>
            </Router>
            </MuiThemeProvider>
        )
    }
}
export default App;