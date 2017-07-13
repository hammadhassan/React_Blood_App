import React, { Component } from 'react';
import { TextField, MenuItem, DropDownMenu, RaisedButton } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import donorList from './donorList.js';
import firebase from "firebase";
    injectTapEventPlugin();
import {List, ListItem, makeSelectable} from 'material-ui/List';

//let DonorForm = makeSelectable(List);

class DonorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        donorList: [],    
         value: "1"
      }
    //this.emptyinputField = this.emptyinputField.bind(this);
    }
    handleChange = (event, index, value) => this.setState({
        //donorList,
        selectedIndex: index,
        value
    });

    onSubmit(ev) {
        ev.preventDefault()
        let donors = {
            name : this.refs.firstName.getValue() + " " + this.refs.lastName.getValue(),
            bloodGroup : this.state.value
        }
        firebase.database().ref('donorsData/').push({ donors }).then(
        //alert("Donor Submit"),
        this.setState({
            // donorList: donors.pop(),
            value: '1',
            donorList: donors[0]
        }),
        console.log(this.state)
    );
    };
    //    handleOnAdd: function (e) {
    //     this.setState({ value: '' });
    // }
    //  emptyinputField() {
    //       return (this.refs.firstName = "",this.refs.lastName = "", this.state.value= "1"  )
    //   };
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
            </div>
        );
    }
}

export default DonorForm;