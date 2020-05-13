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
import React from "react";
import { getMatches } from "../api";

import { Grid, Row } from "react-bootstrap";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { useEffect, useState } from "react";
import AddMatch from "./Modals/AddMatch";

export default function Matches(props) {
  // const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
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

  useEffect(() => {
    console.log(props.match.params, "params");

    getMatches(props.match.params.id).then((res) => {
      console.log(res, "res");
      // setData(res.data);
    });
  });

  const handleAdd = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: (props) => <a href="/user/matchSummary/matchId">{props.value}</a>, // String-based value accessors!
    },
    {
      Header: "Year",
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
  ];

  return (
    <div className="content">
      <AddMatch show={show} setShow={setShow} handleClose={handleClose} />
      <Grid fluid>
        <Row>
          <button
            onClick={() => {
              handleAdd();
            }}
            className="btn btn-info btn-fill"
          >
            + Add Match
          </button>

          <ReactTable data={data} columns={columns} />
        </Row>
      </Grid>
    </div>
  );
}
