import React, { Component } from 'react';
import { TextField, MenuItem, DropDownMenu, RaisedButton } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import donorList from './donorList.js';
import firebase from "firebase";
    injectTapEventPlugin();

class DonorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        value: "1",
        blood: '',
        donors: [{
            // name: 'no name',
            // blood:'no blood'
        }]

        }
    }
    handleChange = (event, index, value) => this.setState({value});

    onSubmit(ev) {
        ev.preventDefault()
    //myInput.value = "";
        var donorList = [];
        donorList = this.state.donors;
        let donor = {
            name : this.refs.firstName.getValue() + " " + this.refs.lastName.getValue(),
            blood : this.state.value
        }
        donorList[0].name = donor.name;
        donorList[0].blood = donor.blood;
        firebase.database().ref('donors/').push({ donorList }).then(
        console.log('success')
        );
        console.log(donorList);

        this.setState({
            donors:  donorList
        })
    //     if (name === "" || name === " " || name === "  " ) {
    //     alert("Please Enter Your Task")
    // }
    //     else {
    // }
    /*var info = "";
    for(var i = 0; i < donorList.length; i++) {
        info = info + donorList[i];
        donorList.innerHTML = info;
        donorList.push(donor);
    }
        console.log(donorList);*/
    }
    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <TextField type="text" placeholder="First Name" ref="firstName" />
                    <TextField type="text" placeholder="Last Name" ref="lastName" />
                    <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
                        <MenuItem value={"1"} primaryText="Blood Group" />
                        <MenuItem value={"A+"} primaryText="A+" />
                        <MenuItem value={"B+"} primaryText="B+" />
                        <MenuItem value={"AB+"} primaryText="AB+" />
                        <MenuItem value={"O+"} primaryText="O+" />
                        <MenuItem value={"O-"} primaryText="O-" />
                        <MenuItem value={"AB-"} primaryText="AB-" />
                        <MenuItem value={"A-"} primaryText="A-" />
                        <MenuItem value={"B-"} primaryText="B-" />
                    </DropDownMenu>

                    <RaisedButton primary={true} label="submit" type="submit"/>
                </form>
                {/*<div>{this.state.donors[0].name }</div>
                <div>{this.state.donors[0].blood }</div>
                
                <donorList data={this.state.don}/>*/}
            </div>
        );
    }
}

export default DonorForm;