import React from "react";
import { addTeam } from "../../api";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddTeamModal = ({
  showAddTeam,
  dataLoader,
  handleCloseAdd,
  setShowAdd,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data, "sub data");
    addTeam(data).then((res) => {
      console.log(res, "resf form server");
      setShowAdd(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Team added.");
      } else toast.error(res.error);
    });
  };
  return (
    <Modal bsSize="lg" show={showAddTeam} onHide={handleCloseAdd}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
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
                  <ControlLabel>Player 1:</ControlLabel>
                  <input
                    type=""
                    className="form-control"
                    name="player1"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
                    className="form-control"
                    name="player2"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
                    className="form-control"
                    name="player3"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
                    className="form-control"
                    name="player4"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
                    className="form-control"
                    name="player5"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
                    className="form-control"
                    name="player6"
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
                    className="form-control"
                    name="player7"
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
                    className="form-control"
                    name="player8"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
                    className="form-control"
                    name="player9"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
                    className="form-control"
                    name="player10"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
                    className="form-control"
                    name="player11"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
                    className="form-control"
                    name="player12"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
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
            Add
          </Button>
          <Button
            className="btn-fill btn-danger"
            variant="secondary"
            onClick={handleCloseAdd}
          >
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddTeamModal;
