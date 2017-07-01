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
      donorList: []
    }
    this.getValues = this.getValues.bind(this)
  }
  getValues(e) {
        e.preventDefault();
    }
  componentWillMount() {
    var rootRef = firebase.database().ref().child('donors');
    rootRef.on('child_added', snap => {
      var arr = [];
      arr = this.state.donorList;
      arr.push(snap.val().donorList);
      this.setState({donorList: arr})
      // console.log(this.state.donorsInfo);
    })
    console.log(this.state.donorList);
  }
  render() {
    return (
      <div>
        {/*{this.props.DonorForm.DonorList}*/}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Blood Group</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>A+</TableRowColumn>
            </TableRow>
            {this.state.donorList.map((v, i) => {
                return <TableRow key={i}>
                  <TableRowColumn>2</TableRowColumn>
                  <TableRowColumn>{v.name}</TableRowColumn>
                  <TableRowColumn>{v.blood}</TableRowColumn>
                </TableRow>
              })}
        </TableBody>
          </Table>
          </div>
        );
    }}

export default DonorList ;