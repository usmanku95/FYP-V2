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
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import 'react-table-6/react-table.css'
import Card from "components/Card/Card.jsx";

class MatchSummary extends Component {
  render() {
      
    return (
      <div className="content">
        <Grid fluid>
          <Row>
          <Card
                title="Match Name"
                // category="Created using Roboto Font Family"
                content={
                  <div>
                  <Grid fluid>
                    <Row>
                      <Col md={6}>
                      <h4> Team 1: </h4>
                      </Col>
                      <Col md={6}>
                      <h4> Team 2: </h4>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col md={6}>
                      <h4> Team 1 Score: </h4>
                      </Col>
                      <Col md={6}>
                      <h4> Team 2 Score: </h4>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col md={6}>
                     <h4> Team 1 Overs: </h4>
                      </Col>
                      <Col md={6}>
                      <h4> Team 2 Overs: </h4>
                      </Col>
                    </Row>
                    <hr/>
                    <h4> Result: </h4>

                  </Grid>
                    </div>

}
/>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MatchSummary;
