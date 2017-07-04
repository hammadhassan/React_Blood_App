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
      // name, "Hammad Hassan",
      // bloodGroup, "B+"
    ]
    //donorsInfo: []
    }
    this.getValues = this.getValues.bind(this)
  }
  getValues(e) {
    e.preventDefault();
  }
  componentWillMount() {   
    var rootRef = firebase.database().ref().child('donors');
    rootRef.on('child_added', snap => {
     alert("jy");
    var arr = [];
    arr[1] = this.state.donorList;
     arr.push(snap.val().donorList);
       console.log(arr[1]);
    // var newArr = arr;
    // console.log(arr);
    this.setState({
      donorList: arr
    });
  });
  console.log(this.state.donorList);
}
/*
  componentWillMount() {
    // console.log(this.state.donorList)
    // var rootRef = firebase.database().ref(`/`).child(`donors`);
    // // rootRef.on('child_added', snap => {
    // // var list = [];
    // rootRef.on(`child_added`, snap => {
    // var arr = [];
    // //   list = snap.val();
    //   // console.log("Blood Group " + list.blood);
    //   // console.log("Name " + list.name);
    //   //console.log(arr);
    //   arr = this.state.donorList;
    //   arr.push(snap.val().donorList);
    //   this.setState({
    //     donorList: arr
    //   });
    //   console.log(this.state.donorList);
    //   console.log(arr);

    // })
    // var commentsRef = firebase.database().ref('/').child('donors');
    // commentsRef.on('child_added', snap => {
    //   addCommentElement(postElement, data.key, data.val().text, data.val().author);
    //   var arr = [];
    //   arr = this.state.donorList;
    //   console.log(data.val());
      
    //    arr.push(snap.val().donorList);
    //   console.log(arr)
    //   this.setState({donorList: arr})
    //   onsole.log(this.state.donorsInfo);

    var rootRef = firebase.database().ref().child('donors');
        rootRef.on('child_added', snap => {
            var arr = [];
            arr = this.state.donorsInfo;
            arr.push(snap.val().donorInfo);
            this.setState({
                donorsInfo: arr
            })
            // console.log(this.state.donorsInfo);
        })
        console.log(this.state.donorsInfo);
  }*/
  render() {
    return (
      <div>
        {/*{this.props.DonorForm.DonorList}*/}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Blood Group</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>Hammad Hassan</TableRowColumn>
              <TableRowColumn>B+</TableRowColumn>
            </TableRow>
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