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
    donorList: [
      {
        name: "Hammad Hassan",
        bloodGroup: "B+"
      }
    ]
  }
    this.getValues = this.getValues.bind(this);
  }

  componentWillMount() {   
     var rootRef = firebase.database().ref().child('donorsData');
         rootRef.on("child_added", snap => {
          var list = [];
          list = this.state.donorList;
          list.push(snap.val().donors);
            //console.log(list);
              this.setState({
                 donorList: list
             })
        //console.log(this.state.donorList);
      });
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