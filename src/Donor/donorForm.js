import React, { Component } from 'react';

class DonorForm extends Component {
    preventDefault(ev) {

    }
    render () {
        return (
            <div>
                <form>
                    <input type="text" placeholder="First Name" ref="fName"/>
                    <input type="text" placeholder="Last Name" ref="lastname"/>
                    <input type="radio" placeholder="Select Your Blood App" ref="blood">
                    <input type="text" placeholder="Blood Group" ref="group"/>
                    <input type="radio" value="A+" ref="group"/>A+
                    <input type="radio" value="B+" ref="group"/>B+
                    <input type="radio" value="AB+" ref="group"/>AB+
                    <input type="radio" value="O-" ref="group"/>O-
                    <input type="radio" value="O+" ref="group"/>O+
                    <input type="button" value="submit"/>
                    <input type="text" placeholder="First Name" ref="Name"/>
                    
                    />
                </form>
            </div>
        );
    }
}

export default DonorForm;