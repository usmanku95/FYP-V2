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
import { getPlayers, updatePlayer, deletePlayer } from "../api";
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
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import AddPlayerModal from "./Modals/AddPlayerModal";
import jwtDecode from "jwt-decode";
export default function Register() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [clickedItem, setClickedItem] = useState({});

  const { register, handleSubmit, errors } = useForm();
  let decoded = { isAdmin: false };
  const dataLoader = () => {
    getPlayers().then((res) => {
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
    deletePlayer(id).then((res) => {
      console.log(res, "resf form server");
      if (res.data.name) {
        dataLoader();

        toast.success("Player deleted.");
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
    updatePlayer(clickedItem._id, data).then((res) => {
      console.log(res, "resf form server");
      setShow(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Player updated.");
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
      Header: "Email",
      accessor: "email",
      Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
    },
    {
      Header: "Reg No.",
      accessor: "regNo",
      Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
    },
    {
      Header: "Faculty",
      accessor: "faculty",
      Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
    },
    {
      Header: "Phone",
      accessor: "phone",
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
      <AddPlayerModal
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        dataLoader={dataLoader}
        handleCloseAdd={handleCloseAdd}
      />
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Player</Modal.Title>
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
                    <ControlLabel>Email:</ControlLabel>
                    <input
                      type="email"
                      required
                      defaultValue={clickedItem.email}
                      className="form-control"
                      name="email"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.email && (
                      <span style={{ color: "red" }}>
                        {errors.email.message}
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
                    <ControlLabel>Reg No. </ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.regNo}
                      className="form-control"
                      name="regNo"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.regNo && (
                      <span style={{ color: "red" }}>
                        {errors.regNo.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Phone:</ControlLabel>
                    <input
                      type="number"
                      defaultValue={clickedItem.phone}
                      className="form-control"
                      name="phone"
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
                      })}
                    />
                    {errors.phone && (
                      <span style={{ color: "red" }}>
                        {errors.phone.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Faculty:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.faculty}
                      className="form-control"
                      name="faculty"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.faculty && (
                      <span style={{ color: "red" }}>
                        {errors.faculty.message}
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
          <button
            onClick={() => {
              handleAdd();
            }}
            className="btn btn-info btn-fill"
          >
            + Get Registered
          </button>

          <ReactTable data={data} columns={columns} />
        </Row>
      </Grid>
    </div>
  );
}
