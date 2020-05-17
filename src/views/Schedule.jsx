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
import React, { useState, useEffect } from "react";
import { getEntries, updateEntry, deleteEntry } from "../api";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import jwtDecode from "jwt-decode";
import AddEntryModal from "./Modals/AddEntryModal";

import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Schedule() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const [showAddEntry, setShowAdd] = useState(false);
  const [clickedItem, setClickedItem] = useState({});
  const { register, handleSubmit, errors } = useForm();
  let decoded = { isAdmin: false };
  const dataLoader = () => {
    getEntries().then((res) => {
      setData(res.data);
    });
  };
  if (localStorage.getItem("token")) {
    decoded = jwtDecode(window.localStorage.getItem("token"));
    console.log(decoded, "decode");
  }

  useEffect(() => {
    //Dont use async await in the components , use only in api.js
    dataLoader();
  }, []);
  const handleAdd = () => {
    setShowAdd(true);
  };
  const handleEdit = (data) => {
    setClickedItem(data);
    setShow(true);
  };
  const handleDelete = (id) => {
    console.log(id, "id");
    deleteEntry(id).then((res) => {
      console.log(res, "resf form server");
      if (res.data.name) {
        dataLoader();

        toast.success("Entry deleted.");
      } else toast.error(res.error);
    });
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleCloseAdd = () => {
    setShowAdd(false);
  };
  const onSubmit = (data) => {
    console.log(data, "sub data");
    updateEntry(clickedItem._id, data).then((res) => {
      console.log(res, "resf form server");
      setShow(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Entry updated.");
      } else toast.error(res.error);
    });
  };
  const columns = [
    {
      Header: "Name",
      accessor: "name", // String-based value accessors!,
      Cell: (props) => <span>{props.value}</span>, // String-based value accessors!
    },

    {
      Header: "Date",
      accessor: "date", // String-based value accessors!,
    },

    {
      Header: "Time",
      accessor: "time", // String-based value accessors!,
    },

    {
      Header: "Venue",
      accessor: "venue",
    },
    decoded.isAdmin
      ? {
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
              </button>{" "}
            </span>
          ), // Custom cell components!
        }
      : {},
  ];

  return (
    <div className="content">
      <AddEntryModal
        showAddEntry={showAddEntry}
        setShowAdd={setShowAdd}
        dataLoader={dataLoader}
        handleCloseAdd={handleCloseAdd}
      />
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid fluid>
              <Row>
                <Col md={6}>
                  {" "}
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Name:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.name}
                      className="form-control"
                      name="name"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.name && (
                      <span style={{ color: "red" }}>
                        {errors.name.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  {" "}
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Date:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.date}
                      className="form-control"
                      name="date"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.date && (
                      <span style={{ color: "red" }}>
                        {errors.date.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  {" "}
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Time:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.time}
                      className="form-control"
                      name="time"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.time && (
                      <span style={{ color: "red" }}>
                        {errors.time.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Venue:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.venue}
                      className="form-control"
                      name="venue"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.venue && (
                      <span style={{ color: "red" }}>
                        {errors.venue.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
            </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-fill btn-primary"
              variant="primary"
              type="submit"
            >
              Edit
            </Button>
            <Button
              className="btn-fill btn-danger"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      <Grid fluid>
        <Row>
          {decoded.isAdmin && (
            <button
              onClick={() => {
                handleAdd();
              }}
              className="btn btn-info btn-fill"
            >
              + Add Entry
            </button>
          )}
          <ReactTable data={data} columns={columns} />
        </Row>
      </Grid>
    </div>
  );
}
