import React, { Component } from 'react';
//import SignUp from "./Components/signup"
//import { Link } from 'react-router'
//import { connect } from "react-redux";

class Main extends Component {
    render () {
        return (
            <div>
                {/*<Link to="/main" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Main</Link>*/}
                <p>Welcome {this.user.name} to Blood Donation!</p>
                {/*<p><b>Allah Pak</b> irshad farmata hai: Jis ne ik jaan ko bachaya goya us ne sari insaniyat ko bachaya</p>*/}
                <br />
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         isLoggedin: state.isLoggedin,
//         isRegistered: state.isRegistered,
//         user: state.user
//     }
// }

// export default connect(mapStateToProps, null)(Main)

export default Main;