import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { addMatch } from "../../api";

import { Modal, Button, Grid, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddMatch = ({ show, handleClose, setShow, eventId, dataLoader }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    data = { eventId, ...data };
    console.log(data, "sub data");

    addMatch(data).then((res) => {
      console.log(res, "resf form server");
      setShow(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Event updated.");
      } else toast.error(res.error);
    });
  };
  return (
    <Modal bsSize="lg" show={show} onHide={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Match Info.</Modal.Title>
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
              </Col>
              <Col md={6}>
                {" "}
                <FormGroup controlId="formBasicText">
                  <ControlLabel>Date:</ControlLabel>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "White spaces are not allowed.",
                    })}
                  />
                  {errors.date && (
                    <span style={{ color: "red" }}>{errors.date.message}</span>
                  )}
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                {" "}
                <FormGroup controlId="formBasicText">
                  <ControlLabel>Team 1:</ControlLabel>
                  <input
                    type=""
                    className="form-control"
                    name="team1"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "White spaces are not allowed.",
                    })}
                  />
                  {errors.team1 && (
                    <span style={{ color: "red" }}>{errors.team1.message}</span>
                  )}
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="formBasicText">
                  <ControlLabel>Team 2:</ControlLabel>
                  <input
                    type=""
                    className="form-control"
                    name="team2"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "White spaces are not allowed.",
                    })}
                  />
                  {errors.team2 && (
                    <span style={{ color: "red" }}>{errors.team2.message}</span>
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
                    placeholder="e.g 300/9"
                    className="form-control"
                    name="team1Score"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "White spaces are not allowed.",
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
                    className="form-control"
                    placeholder="e.g 300/9"
                    name="team2Score"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "White spaces are not allowed.",
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
                    type="number"
                    className="form-control"
                    name="team1Overs"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "White spaces are not allowed.",
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
                    type="number"
                    className="form-control"
                    name="team2Overs"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "White spaces are not allowed.",
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
                    className="form-control"
                    name="result"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "White spaces are not allowed.",
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
            Add
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
  );
};

export default AddMatch;
