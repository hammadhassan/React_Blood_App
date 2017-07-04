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
import firebase from "firebase";

class DonorList extends Component {
  constructor() {
    super();
    this.state = {
    donorList: [{
      name: "Hammad Hassan",
      bloodGroup: "B+"
    }]
    }
    this.getValues = this.getValues.bind(this)
  }
  componentWillMount() {   
    // var rootRef = firebase.database().ref('/').child('donorsData');
    //     rootRef.on('child_added', snap => {
    var rootRef = firebase.database().ref('/').child(`donorsData`);
        rootRef.once('value', (snap) => {
            var list = [{
            //name: this.state.donorList.name,
            //bloodGroup: this.state.donorList.bloodGroup
            }];
            list.push(snap.val().donorList);
            list = this.state.donorList;
            // alert(list);
            this.setState({
                donorList: list
            })
            //console.log(this.state.donorList);
        })
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