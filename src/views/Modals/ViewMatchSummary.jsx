import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { editMatch } from "../../api";
import Card from "components/Card/Card.jsx";

import { Modal, Button, Grid, Row, Col } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
const ViewMatchSummary = ({ showView, selectedMatch, handleCloseView }) => {
  return (
    <Modal bsSize="lg" show={showView} onHide={handleCloseView}>
      <Modal.Header closeButton>
        <Modal.Title>View Match Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card
          title={selectedMatch.name}
          // category="Created using Roboto Font Family"
          content={
            <div>
              <Grid fluid>
                <Row>
                  <Col md={6}>
                    <h5> Team 1: {selectedMatch.team1}</h5>
                  </Col>
                  <Col md={6}>
                    <h5> Team 2:{selectedMatch.team2} </h5>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={6}>
                    <h5> Team 1 Score: {selectedMatch.team1Score}</h5>
                  </Col>
                  <Col md={6}>
                    <h5> Team 2 Score: {selectedMatch.team2Score}</h5>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={6}>
                    <h5> Team 1 Overs:{selectedMatch.team1Overs} </h5>
                  </Col>
                  <Col md={6}>
                    <h5> Team 2 Overs:{selectedMatch.team2Overs} </h5>
                  </Col>
                </Row>
                <hr />
                <h5> Result: {selectedMatch.result}</h5>
              </Grid>
            </div>
          }
        />
      </Modal.Body>
    </Modal>
  );
};

export default ViewMatchSummary;
