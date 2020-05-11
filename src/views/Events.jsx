/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================
gg
* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import { getEvents } from "../api";
import { Grid, Row } from "react-bootstrap";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { Modal, Button } from "react-bootstrap";

export default function Events() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    //Dont use async await in the components , use only in api.js
    getEvents().then((res) => {
      console.log(res, "res");

      setData(res.data);
    });
  }, []);

  const handleEdit = () => {
    setShow(true);

    console.log("sdkfsks");
  };
  const handleClose = () => {
    setShow(false);
  };

  const columns = [
    {
      Header: "Name",
      accessor: "name", // String-based value accessors!,
      Cell: (props) => <a href="/user/matches/eventId">{props.value}</a>, // String-based value accessors!
    },
    {
      Header: "Year",
      accessor: "year",
      Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
    },

    true && {
      Header: "Actions",
      accessor: "age",
      Cell: (props) => (
        <span className="number">
          <button
            onClick={handleEdit}
            className="btn btn-sm btn-primary btn-fill"
          >
            edit
          </button>{" "}
          <button className="btn btn-sm btn-danger btn-fill">delete</button>
        </span>
      ), // Custom cell components!
    },
  ];

  return (
    <div className="content">
      {/* <EventEdit show={show} onHide={handleClose} /> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Grid fluid>
        <Row>
          <button className="btn btn-info btn-fill">+ Add Event</button>
          <ReactTable data={data} columns={columns} />
        </Row>
      </Grid>
    </div>
  );
}
