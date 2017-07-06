import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
//import firebase from "firebase";
import * as firebase from 'firebase';

class DonorList extends Component {
  constructor() {
    super();
    this.state = {
    donorList: [
    //   {
    //   name: "Hammad Hassan",
    //   bloodGroup: "B+"
    // }
    ]
    }
    this.getValues = this.getValues.bind(this)
  }
  componentWillMount() {   
    
    // var rootRef = firebase.database().ref('/').child('donorsData');
    //     rootRef.on('child_added', snap => {
    // var rootRef = firebase.database().ref().child('donorsData');
    //     rootRef.on("value", (snap) => {
    //         var list = [
    //         //name: this.state.donorList.name,
    //         //bloodGroup: this.state.donorList.bloodGroup
    //         ];
    //         list = this.state.donorList;
    //         list.push(snap.val().donorList);
    //         alert(list)
    //         // alert(list);
    //         this.setState({
    //             donorList: list
    //         })
    //         //console.log(this.state.donorList);
    //     })
    //     // console.log(this.state.donorList);
     var rootRef = firebase.database().ref().child('donorsData');
    //     rootRef.on('child_added', function (value) {
            rootRef.on("child_added", function(snapshot) {
          var details = [
            // {}
          ];
          details = snapshot.val();
          //details.push(snapshot.val().donorList);
          console.log(snapshot.val());
            console.log(details);
            //alert(donorList);
  console.log("Donor Name: " + details.donors.name);
  console.log("Blood Group: " + details.donors.bloodGroup);
            console.log(details);
            this.setState({
                 donorList: details
             })
            details = this.state.donorList;
  //console.log(this.state.donorList);
  //console.log("Previous Post ID: " + prevChildKey);

        //     var list = [];
        //     list.push(value.val().donorList);
        //     this.setState({
        //         donorList: list
        //     })
        //     console.log(this.state.donorList);
        });
        // console.log(this.state.donorList);
    }
  getValues(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Blood Group</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/*<TableRow>
              <TableRowColumn>Hammad Hassan</TableRowColumn>
              <TableRowColumn>B+</TableRowColumn>
            </TableRow>*/}
            {this.state.donorList.map((value, i) => {
                return <TableRow key={i}>
                  <TableRowColumn>{value.name}</TableRowColumn>
                  <TableRowColumn>{value.bloodGroup}</TableRowColumn>
                </TableRow>
              })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default DonorList;