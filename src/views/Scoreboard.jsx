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
import { getScoreboards, updateScoreboard } from "../api";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import "react-table-6/react-table.css";
import Card from "components/Card/Card.jsx";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";

export default function Scoreboard() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [clickedItem, setClickedItem] = useState({});
  const { register, handleSubmit, errors } = useForm();

  let decoded = { isAdmin: false };
  if (localStorage.getItem("token")) {
    decoded = jwtDecode(window.localStorage.getItem("token"));
    console.log(decoded, "decode");
  }
  const dataLoader = () => {
    getScoreboards().then((res) => {
      setData(res.data);
      setClickedItem(res.data[0]);
      console.log(res.data, "res dayta");
    });
  };

  useEffect(() => {
    //Dont use async await in the components , use only in api.js
    dataLoader();
  }, []);

  const handleEdit = () => {
    setShow(true);
    console.log(clickedItem, "clicked item");
  };
  const handleClose = () => {
    setShow(false);
  };

  const onSubmit = (data) => {
    console.log(data, "sub data");
    updateScoreboard(clickedItem._id, data).then((res) => {
      console.log(res, "resf form server");
      setShow(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Scoreboard updated.");
      } else toast.error(res.error);
    });
  };
  return (
    <div className="content">
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Scoreboard</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid fluid>
              <Row>
                <Col md={12}>
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
                {/* <Col md={6}>
                  {" "}
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Date:</ControlLabel>
                    <input
                      type="date"
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
                </Col> */}
              </Row>
              <Row>
                <Col md={6}>
                  {" "}
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Team 1:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.team1}
                      className="form-control"
                      name="team1"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.team1 && (
                      <span style={{ color: "red" }}>
                        {errors.team1.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Team 2:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.team2}
                      className="form-control"
                      name="team2"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.team2 && (
                      <span style={{ color: "red" }}>
                        {errors.team2.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Team 1 Score:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.team1Score}
                      placeholder="e.g 300/9"
                      className="form-control"
                      name="team1Score"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.team1Score && (
                      <span style={{ color: "red" }}>
                        {errors.team1Score.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Team 2 Score:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.team2Score}
                      className="form-control"
                      placeholder="e.g 300/9"
                      name="team2Score"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.team2Score && (
                      <span style={{ color: "red" }}>
                        {errors.team2Score.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Team 1 Overs:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.team1Overs}
                      className="form-control"
                      name="team1Overs"
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
                    {errors.team1Overs && (
                      <span style={{ color: "red" }}>
                        {errors.team1Overs.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Team 2 Overs:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.team2Overs}
                      className="form-control"
                      name="team2Overs"
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
                    {errors.team2Overs && (
                      <span style={{ color: "red" }}>
                        {errors.team2Overs.message}
                      </span>
                    )}
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Result:</ControlLabel>
                    <input
                      type=""
                      defaultValue={clickedItem.result}
                      className="form-control"
                      name="result"
                      ref={register({
                        required: {
                          value: true,
                          message: "This field is required.",
                        },
                      })}
                    />
                    {errors.result && (
                      <span style={{ color: "red" }}>
                        {errors.result.message}
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
            <button onClick={handleEdit} className="btn btn-info btn-fill">
              Edit Scoreboard{" "}
            </button>
          )}
          {data.length ? (
            <Card
              title={data[0].name}
              // category="Created using Roboto Font Family"
              content={
                <div>
                  <Grid fluid>
                    <Row>
                      <Col md={6}>
                        <h5> Team 1: {data[0].team1} </h5>
                      </Col>
                      <Col md={6}>
                        <h5> Team 2: {data[0].team2}</h5>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6}>
                        <h5> Team 1 Score: {data[0].team1Score}</h5>
                      </Col>
                      <Col md={6}>
                        <h5> Team 2 Score: {data[0].team2Score}</h5>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6}>
                        <h5> Team 1 Overs: {data[0].team1Overs}</h5>
                      </Col>
                      <Col md={6}>
                        <h5> Team 2 Overs:{data[0].team2Overs} </h5>
                      </Col>
                    </Row>
                    <hr />
                    <h5> Result:{data[0].result} </h5>
                  </Grid>
                </div>
              }
            />
          ) : (
            <h4>No data found.</h4>
          )}
        </Row>
      </Grid>
    </div>
  );
}
