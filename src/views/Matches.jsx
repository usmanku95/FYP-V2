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
import { getMatches, deleteMatch } from "../api";
import { Grid, Row } from "react-bootstrap";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { useEffect, useState } from "react";
import AddMatch from "./Modals/AddMatch";
import EditMatch from "./Modals/EditMatch";

import { toast } from "react-toastify";
import ViewMatchSummary from "./Modals/ViewMatchSummary";

export default function Matches(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);

  const [selectedMatch, setSelectedMatch] = useState({});

  const dataLoader = () => {
    getMatches(props.match.params.id).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    dataLoader();
  }, []);

  const handleAdd = () => {
    setShow(true);
  };
  const handleView = (data) => {
    console.log("view click");
    setSelectedMatch(data);
    setShowView(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleCloseEdit = () => {
    setShowEdit(false);
  };
  const handleCloseView = () => {
    setShowView(false);
  };
  const handleEdit = (data) => {
    setSelectedMatch(data);
    setShowEdit(true);
  };

  const handleDelete = (id) => {
    console.log(id, "id");
    deleteMatch(id).then((res) => {
      if (res.data.name) {
        dataLoader();

        toast.success("Match deleted.");
      } else toast.error(res.error);
    });
  };
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: (props) => (
        <span
          style={{ cursor: "pointer" }}
          className="text-primary "
          onClick={() => handleView(props.original)}
        >
          {props.value}
        </span>
      ), // String-based value accessors!
    },
    {
      Header: "Date",
      accessor: "date",
      Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
    },

    true && {
      Header: "Actions",
      accessor: "age",
      Cell: (props) => (
        <span className="number">
          <button
            onClick={() => handleEdit(props.original)}
            className="btn btn-sm btn-primary btn-fill"
          >
            edit
          </button>{" "}
          <button
            onClick={() => {
              handleDelete(props.original._id);
            }}
            className="btn btn-sm btn-danger btn-fill"
          >
            delete
          </button>
        </span>
      ), // Custom cell components!
    },
  ];

  return (
    <div className="content">
      <AddMatch
        dataLoader={dataLoader}
        show={show}
        eventId={props.match.params.id}
        setShow={setShow}
        handleClose={handleClose}
      />
      <ViewMatchSummary
        showView={showView}
        setShowView={setShowView}
        selectedMatch={selectedMatch}
        handleCloseView={handleCloseView}
      />
      <EditMatch
        dataLoader={dataLoader}
        showEdit={showEdit}
        eventId={props.match.params.id}
        setShowEdit={setShowEdit}
        selectedMatch={selectedMatch}
        handleCloseEdit={handleCloseEdit}
      />
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
