import React from "react";
import { addPlayer } from "../../api";
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
const AddPlayerModal = ({
  showAdd,
  dataLoader,
  handleCloseAdd,
  setShowAdd,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data, "sub data");
    addPlayer(data).then((res) => {
      console.log(res, "resf form server");
      setShowAdd(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Player added.");
      } else toast.error(res.error);
    });
  };
  return (
    <Modal show={showAdd} onHide={handleCloseAdd}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Form</Modal.Title>
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
                  <ControlLabel>Email:</ControlLabel>
                  <input
                    type=""
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
                    <span style={{ color: "red" }}>{errors.email.message}</span>
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
                    <span style={{ color: "red" }}>{errors.regNo.message}</span>
                  )}
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="formBasicText">
                  <ControlLabel>Phone:</ControlLabel>
                  <input
                    type=""
                    className="form-control"
                    name="phone"
                    ref={register({
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                    })}
                  />
                  {errors.phone && (
                    <span style={{ color: "red" }}>{errors.phone.message}</span>
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

export default AddPlayerModal;
