import React from "react";
import { addEntry } from "../../api";
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
const AddEntryModal = ({
  showAddEntry,
  dataLoader,
  handleCloseAdd,
  setShowAdd,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data, "sub data");
    addEntry(data).then((res) => {
      console.log(res, "resf form server");
      setShowAdd(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Entry added.");
      } else toast.error(res.error);
    });
  };
  return (
    <Modal show={showAddEntry} onHide={handleCloseAdd}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Entry</Modal.Title>
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
                  <ControlLabel>Time:</ControlLabel>
                  <input
                    type="time"
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
                    <span style={{ color: "red" }}>{errors.time.message}</span>
                  )}
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="formBasicText">
                  <ControlLabel>Venue:</ControlLabel>
                  <input
                    type=""
                    className="form-control"
                    name="venue"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "White spaces are not allowed.",
                    })}
                  />
                  {errors.venue && (
                    <span style={{ color: "red" }}>{errors.venue.message}</span>
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

export default AddEntryModal;
