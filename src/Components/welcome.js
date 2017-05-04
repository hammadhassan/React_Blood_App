import React, {Component} from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';

class Welcome extends Component {
    render() {
        return (
            <div>
                <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>,
                <h1>Welcome to The Blood App</h1>
                {/*{this.props.refs.email.getValue()}*/}
                {this.props.user.name}
            </div>
        );
    }
};

// const mapStateToProps = (state) => {     return {         uesr:
// state.authUser         // isLoggedin: state.isLoggedin     } } export default
// connect(mapStateToProps, null)(Welcome)

// export default(Welcome, AppBar);

const mapStateToProps = (state) => {
    return {
        user: state.authUser,
        isLoggedin: state.isLoggedin
    }
}
export default connect(mapStateToProps, null)(Welcome, AppBar)