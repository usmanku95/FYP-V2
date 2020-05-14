import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { addEvent } from "../../api";

import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddModal = ({ showAdd, dataLoader, handleCloseAdd, setShowAdd }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data, "sub data");
    addEvent(data).then((res) => {
      console.log(res, "resf form server");
      setShowAdd(false);
      if (res.data.name) {
        dataLoader();

        toast.success("Event updated.");
      } else toast.error(res.error);
    });
  };
  return (
    <Modal show={showAdd} onHide={handleCloseAdd}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

          <FormGroup controlId="formBasicText">
            <ControlLabel>Year:</ControlLabel>
            <input
              type="number"
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

export default AddModal;
