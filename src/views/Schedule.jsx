/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class Schedule extends Component {
  render() {
    const data = [
      {
        name: "Tanner Linsley",
        age: 26,
        //     friend: {
        //       name: 'Jason Maurer',
        //       age: 23,
        //     }
        //   },{
      },
    ];

    const columns = [
      {
        Header: "Name",
        accessor: "name", // String-based value accessors!,
        Cell: (props) => <a href="/user/matches/eventId">{props.value}</a>, // String-based value accessors!
      },

      {
        Header: "Date",
        accessor: "name", // String-based value accessors!,
        Cell: (props) => <a href="/user/matches/eventId">{props.value}</a>, // String-based value accessors!
      },

      {
        Header: "Time",
        accessor: "name", // String-based value accessors!,
        Cell: (props) => <a href="/user/matches/eventId">{props.value}</a>, // String-based value accessors!
      },

      {
        Header: "Venue",
        accessor: "age",
        Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
      },
      true && {
        Header: "Actions",
        accessor: "age",
        Cell: (props) => (
          <span className="number">
            <button className="btn btn-sm btn-primary btn-fill">edit</button>{" "}
            <button className="btn btn-sm btn-danger btn-fill">delete</button>
          </span>
        ), // Custom cell components!
      },
      //    {
      //     id: 'friendName', // Required because our accessor is not a string
      //     Header: 'Friend Name',
      //     // accessor: d => d.friend.name // Custom value accessors!
      //   }, {
      //     Header: props => <span>Friend Age</span>, // Custom header components!
      //     accessor: 'friend.age'
      //   }
    ];

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <button className="btn btn-info btn-fill">+ Add Entry</button>

            <ReactTable data={data} columns={columns} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Schedule;
