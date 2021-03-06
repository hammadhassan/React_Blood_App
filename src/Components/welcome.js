import React, {Component} from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import DonorList from "../Donor/donorList"
import DonorForm from "../Donor/donorForm"
import { browserHistory} from 'react-router';

class Welcome extends Component {
    constructor(props) {
    super(props);
    this.setState({
      isLoggedin: false,
    })
//   console.log(state);
  }
    componentWillReceiveProps(nextProp) {
        if (this.state.isLoggedin === false) {
            browserHistory.push('/login')
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome to The Blood App</h1>
                <h2>{this.props.user.name}</h2>
                <DonorList />
                <DonorForm />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.authUser,
        isLoggedin: state.isLoggedin
    }
}
export default connect(mapStateToProps, null)(Welcome, AppBar)