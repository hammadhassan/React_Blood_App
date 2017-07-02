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
  // componentWillMount() {   var rootRef =
  // firebase.database().ref().child('donors');   rootRef.on('child_added', snap
  // => {     var arr = [];     arr = this.state.donorList;     console.log(arr);
  //    arr.push(snap.val().donorList);     var newArr = arr[0][0];
  // console.log(arr[0][0]);     this.setState({       donorList: newArr     })
  // })   console.log(this.state.donorList); }

  componentWillMount() {
    console.log(this.state.donorList)
    var rootRef = firebase.database().ref().child('donors');
    rootRef.on('child_added', snap => {
    var list = [];
      list = snap.val();
      // console.log("Blood Group " + list.blood);
      // console.log("Name " + list.name);
      console.log(list);
      list = this.state.donorList;
      list.push(snap.val().donorList);
      this.setState({
        donorList: list
      })
      console.log(this.state.donorList);

    // })
    // var commentsRef = firebase.database().ref('/').child('donors');
    // commentsRef.on('child_added', function (data) {
    //   // addCommentElement(postElement, data.key, data.val().text, data.val().author);
    //   var arr = [];
    //   arr = this.state.donorList;
    //   console.log(data.val());
      
    //   // arr.push(data.val());
    //   console.log(arr)
    //   // this.setState({donorList: arr})
    //   // console.log(this.state.donorsInfo);
    });
  }
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
            {this.state.donorList.map((v, i) => {
                return <TableRow key={i}>
                  <TableRowColumn>{v.value.bloodGroup}</TableRowColumn>
                  <TableRowColumn>{v.value.name}</TableRowColumn>
                </TableRow>
              })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default DonorList;