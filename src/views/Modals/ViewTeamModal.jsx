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

const ViewTeamModal = ({
  showViewTeam,
  handleCloseView,
  setShowView,
  clickedItem,
}) => {
  return (
    <Modal bsSize="lg" show={showViewTeam} onHide={handleCloseView}>
      <Modal.Header closeButton>
        <Modal.Title>View Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Grid fluid>
          <Row>
            <Col md={6}>
              {" "}
              <FormGroup controlId="formBasicText">
                <ControlLabel>Name:</ControlLabel>
                {"   "}
                <span>{clickedItem.name}</span>
              </FormGroup>
            </Col>
            <Col md={6}>
              {" "}
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 1:</ControlLabel>

                {"   "}
                <span>{clickedItem.player1}</span>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {" "}
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 2:</ControlLabel>

                {"   "}
                <span>{clickedItem.player2}</span>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 3:</ControlLabel>

                {"   "}
                <span>{clickedItem.player3}</span>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 4:</ControlLabel>

                {"   "}
                <span>{clickedItem.player4}</span>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 5:</ControlLabel>

                {"   "}
                <span>{clickedItem.player5}</span>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 6:</ControlLabel>

                {"   "}
                <span>{clickedItem.player6}</span>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 7:</ControlLabel>

                {"   "}
                <span>{clickedItem.player7}</span>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 8:</ControlLabel>

                {"   "}
                <span>{clickedItem.player8}</span>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 9:</ControlLabel>

                {"   "}
                <span>{clickedItem.player9}</span>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 10:</ControlLabel>

                {"   "}
                <span>{clickedItem.player10}</span>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 11:</ControlLabel>

                {"   "}
                <span>{clickedItem.player11}</span>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Player 12:</ControlLabel>

                {"   "}
                <span>{clickedItem.player12}</span>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Modal.Body>
    </Modal>
  );
};

export default ViewTeamModal;
