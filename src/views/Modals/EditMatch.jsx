import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { editMatch } from "../../api";

import { Modal, Button, Grid, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditMatch = ({
  showEdit,
  selectedMatch,
  handleCloseEdit,
  setShowEdit,
  dataLoader,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data, "sub data");

    editMatch(selectedMatch._id, data).then((res) => {
      console.log(res, "resf form server");
      setShowEdit(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Match updated.");
      } else toast.error(res.error);
    });
  };
  return (
    <Modal bsSize="lg" show={showEdit} onHide={handleCloseEdit}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Match Info.</Modal.Title>
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
                    defaultValue={selectedMatch.name}
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
                    defaultValue={selectedMatch.date}
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
                    defaultValue={selectedMatch.team1}
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
                    defaultValue={selectedMatch.team2}
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
                    defaultValue={selectedMatch.team1Score}
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
                    defaultValue={selectedMatch.team2Score}
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
                    defaultValue={selectedMatch.team1Overs}
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
                    type="number"
                    defaultValue={selectedMatch.team2Overs}
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
                    defaultValue={selectedMatch.result}
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
            Edit
          </Button>
          <Button
            className="btn-fill btn-danger"
            variant="secondary"
            onClick={handleCloseEdit}
          >
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default EditMatch;
