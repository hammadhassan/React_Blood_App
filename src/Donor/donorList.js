import React, { Component } from 'react';

class DonorList extends Component {
    preventDefault(ev) 
    render () {
        return (
            <div>
                <form onSubmit={}>
                    <input tyoe="text" placeholder="First Name" ref="fName"/>
                    <input tyoe="text" placeholder="Last Name" ref="lastname"/>
                    <input tyoe="text" placeholder="Blood Group" ref="group"/>
                    <input tyoe="text" placeholder="First Name" ref="Name"/>
                    <input type="button" value="submit"/>
                </form>
            </div>
        );
    }
}

export default DonorList;