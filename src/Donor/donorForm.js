import React, { Component } from 'react';
//import DropDownMenu from 'material-ui/DropDownMenu';
//import MenuItem from 'material-ui/MenuItem';
import { TextField, MenuItem, DropDownMenu, RaisedButton } from 'material-ui';

class DonorForm extends Component {
    // onSubmit() {
    //     var name = this.refs.firstName.value;
    //     var blood = this.refs.group.value;
    //     console.log(name + blood);
    // }
    constructor(props) {
        super(props);
        this.state = {
         value: 1,
        // blood: '',
        }
    }
    // changeValue = (event, key) => {
    //     this.setState({
    //     value: key + 1,
    //     blood: event.target.childNodes[0].nodeValue
    //     });
    // }

    handleChange = (event, index, value) => this.setState({value});

    onSubmit(ev) {
        ev.preventDefault()
        let donor = {
            name : this.refs.firstName.getValue() + " " + this.refs.lastName.getValue(),
            blood : this.state.value
        }
        console.log(donor);
    }
    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <TextField type="text" placeholder="First Name" ref="firstName" errorText="This field is required"/>
                    <TextField type="text" placeholder="Last Name" ref="lastName" errorText="This field is required"/>
                    {/*<p>Select Your Blood Group</p>
                    <input type="radio" value="0" ref="group"/>A+ <br />
                    <input type="radio" value="1" ref="group"/>A- <br />
                    <input type="radio" value="2" ref="group" checked/>B+<br />
                    <input type="radio" value="3" ref="group"/>B-<br />
                    <input type="radio" value="4" ref="group"/>AB+<br />
                    <input type="radio" value="5" ref="group"/>AB-<br />
                    <input type="radio" value="6" ref="group"/>O-<br />
                    <input type="radio" value="7" ref="group"/>O+<br />*/}
                       <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
                        <MenuItem value={1} primaryText="Blood Group" />
                        <MenuItem value={2} primaryText="A+" />
                        <MenuItem value={3} primaryText="B+" />
                        <MenuItem value={4} primaryText="AB+" />
                        <MenuItem value={5} primaryText="O+" />
                        <MenuItem value={6} primaryText="O-" />
                        <MenuItem value={7} primaryText="AB-" />
                        <MenuItem value={8} primaryText="B-" />
                        <MenuItem value={9} primaryText="A-" />
                    </DropDownMenu>
                    <RaisedButton primary={true} label="submit" type="submit"/>
                </form>
            </div>
        );
    }
}

export default DonorForm;