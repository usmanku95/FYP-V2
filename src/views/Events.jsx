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
import { getEvents, updateEvent, deleteEvent } from "../api";
import {
  Grid,
  Row,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import AddModal from "./Modals/AddModal";
import jwtDecode from "jwt-decode";
export default function Events() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [clickedItem, setClickedItem] = useState({});

  const { register, handleSubmit, errors } = useForm();
  let decoded = { isAdmin: false };
  const dataLoader = () => {
    getEvents().then((res) => {
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

  const handleEdit = (data) => {
    setClickedItem(data);
    setShow(true);
  };
  const handleAdd = () => {
    setShowAdd(true);
  };

  const handleDelete = (id) => {
    console.log(id, "id");
    deleteEvent(id).then((res) => {
      console.log(res, "resf form server");
      if (res.data.name) {
        dataLoader();

        toast.success("Event deleted.");
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
    updateEvent(clickedItem._id, data).then((res) => {
      console.log(res, "resf form server");
      setShow(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Event updated.");
      } else toast.error(res.error);
    });
  };

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: (props) => (
        <Link to={`/user/matches/${props.original._id}`}>{props.value}</Link>
      ),
    },
    {
      Header: "Year",
      accessor: "year",
      Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
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
              </button>
            </span>
          ), // Custom cell components!
        }
      : {},
  ];

  return (
    <div className="content">
      <AddModal
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        dataLoader={dataLoader}
        handleCloseAdd={handleCloseAdd}
      />
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                  validate: (value) =>
                    value.trim() !== "" || "White spaces are not allowed.",
                })}
              />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formBasicText">
              <ControlLabel>Year:</ControlLabel>
              <input
                type="number"
                defaultValue={clickedItem.year}
                className="form-control"
                name="year"
                ref={register({
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                  min: { value: 0, message: "minimum is 0." },
                  maxLength: {
                    value: 11,
                    message: "Max length is 11.",
                  },
                  validate: (value) =>
                    value.trim() !== "" || "White spaces are not allowed.",
                })}
              />
              {errors.year && (
                <span style={{ color: "red" }}>{errors.year.message}</span>
              )}
              <FormControl.Feedback />
            </FormGroup>
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
              + Add Event
            </button>
          )}
          <ReactTable data={data} columns={columns} />
        </Row>
      </Grid>
    </div>
  );
}
