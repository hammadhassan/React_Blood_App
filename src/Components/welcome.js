import React, {Component} from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
//import PropTypes from 'prop-types';
import DonorList from "../Donor/donorList"
import DonorForm from "../Donor/donorForm"

class Welcome extends Component {
    render() {
        return (
            <div>
                {/*<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>,*/}
                <h1>Welcome to The Blood App</h1>
                {/*{this.props.refs.email.getValue()}*/}
                <h2>{this.props.user.name}</h2>
                <DonorList />
                <DonorForm />
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