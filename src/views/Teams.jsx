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
import { getTeams, updateTeam, deleteTeam } from "../api";
import { Modal, Button } from "react-bootstrap";
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
import AddTeamModal from "./Modals/AddTeamModal";
import ViewTeamModal from "./Modals/ViewTeamModal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

export default function Teams() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const [showAddTeam, setShowAdd] = useState(false);
  const [showViewTeam, setShowView] = useState(false);

  const [clickedItem, setClickedItem] = useState({});
  const { register, handleSubmit, errors } = useForm();

  let decoded = { isAdmin: false };
  if (localStorage.getItem("token")) {
    decoded = jwtDecode(window.localStorage.getItem("token"));
    console.log(decoded, "decode");
  }

  const handleAdd = () => {
    setShowAdd(true);
  };
  const handleView = (data) => {
    setClickedItem(data);
    setShowView(true);
  };
  const handleEdit = (data) => {
    setClickedItem(data);
    setShow(true);
  };

  const handleDelete = (id) => {
    console.log(id, "id");
    deleteTeam(id).then((res) => {
      console.log(res, "resf form server");
      if (res.data.name) {
        dataLoader();

        toast.success("Team deleted.");
      } else toast.error(res.error);
    });
  };
  const handleCloseAdd = () => {
    setShowAdd(false);
  };
  const handleCloseView = () => {
    setShowView(false);
  };
  const handleClose = () => {
    setShow(false);
  };

  const onSubmit = (data) => {
    console.log(data, "sub data");
    updateTeam(clickedItem._id, data).then((res) => {
      console.log(res, "resf form server");
      setShow(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Team updated.");
      } else toast.error(res.error);
    });
  };
  const dataLoader = () => {
    getTeams().then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    //Dont use async await in the components , use only in api.js
    dataLoader();
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name", // String-based value accessors!,
      Cell: (props) => (
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => handleView(props.original)}
        >
          {props.value}
        </span>
      ), // String-based value accessors!
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
      <AddTeamModal
        showAddTeam={showAddTeam}
        setShowAdd={setShowAdd}
        dataLoader={dataLoader}
        handleCloseAdd={handleCloseAdd}
      />
      <ViewTeamModal
        showViewTeam={showViewTeam}
        setShowView={setShowView}
        handleCloseView={handleCloseView}
        clickedItem={clickedItem}
      />

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Team</Modal.Title>
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
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
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
                    <ControlLabel>Player 1:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player1}
                      className="form-control"
                      name="player1"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player1 && (
                      <span style={{ color: "red" }}>
                        {errors.player1.message}
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
                    <ControlLabel>Player 2:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player2}
                      className="form-control"
                      name="player2"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player2 && (
                      <span style={{ color: "red" }}>
                        {errors.player2.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 3:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player3}
                      className="form-control"
                      name="player3"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player3 && (
                      <span style={{ color: "red" }}>
                        {errors.player3.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 4:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player4}
                      className="form-control"
                      name="player4"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player4 && (
                      <span style={{ color: "red" }}>
                        {errors.player4.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 5:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player5}
                      className="form-control"
                      name="player5"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player5 && (
                      <span style={{ color: "red" }}>
                        {errors.player5.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 6:</ControlLabel>
                    <input
                      type="text"
                      defaultValue={clickedItem.player6}
                      className="form-control"
                      name="player6"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                        min: { value: 0, message: "minimum is 0." },
                        maxLength: {
                          value: 11,
                          message: "Max length is 11.",
                        },
                      })}
                    />
                    {errors.player6 && (
                      <span style={{ color: "red" }}>
                        {errors.player6.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 7:</ControlLabel>
                    <input
                      type="text"
                      defaultValue={clickedItem.player7}
                      className="form-control"
                      name="player7"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                        min: { value: 0, message: "minimum is 0." },
                        maxLength: {
                          value: 11,
                          message: "Max length is 11.",
                        },
                      })}
                    />
                    {errors.player7 && (
                      <span style={{ color: "red" }}>
                        {errors.player7.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 8:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player8}
                      className="form-control"
                      name="player8"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player8 && (
                      <span style={{ color: "red" }}>
                        {errors.player8.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 9:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player9}
                      className="form-control"
                      name="player9"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player9 && (
                      <span style={{ color: "red" }}>
                        {errors.player9.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 10:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player10}
                      className="form-control"
                      name="player10"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player10 && (
                      <span style={{ color: "red" }}>
                        {errors.player10.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 11:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player11}
                      className="form-control"
                      name="player11"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player11 && (
                      <span style={{ color: "red" }}>
                        {errors.player11.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Player 12:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.player12}
                      className="form-control"
                      name="player12"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                        validate: (value) =>
                          value.trim() !== "" ||
                          "White spaces are not allowed.",
                      })}
                    />
                    {errors.player12 && (
                      <span style={{ color: "red" }}>
                        {errors.player12.message}
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
              + Add Team
            </button>
          )}
          <ReactTable data={data} columns={columns} />
        </Row>
      </Grid>
    </div>
  );
}
