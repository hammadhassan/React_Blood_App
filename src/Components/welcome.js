import React, { Component } from 'react';
//import { connect } from 'react-redux'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to The Blood App</h1>
                {/*{this.props.uesr.name}*/}
                {/*{this.props.children}*/}
            </div>
        );
    }
};

// const mapStateToProps = (state) => {
//     return {
//         uesr: state.authUser
//         // isLoggedin: state.isLoggedin
//     }
// }
// export default connect(mapStateToProps, null)(Welcome)

export default Welcome;