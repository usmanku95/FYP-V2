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

class Scoreboard extends Component {
  render() {
      
    return (
      <div className="content">
        <Grid fluid>
          <Row>
          <button className='btn btn-info btn-fill'>Edit Scoreboard </button>

          <Card
                title="Match Name"
                // category="Created using Roboto Font Family"
                content={
                  <div>
                  <Grid fluid>
                    <Row>
                      <Col md={6}>
                      <h5> Team 1: IIUI </h5>

                      </Col>
                      <Col md={6}>
                      <h5> Team 2: </h5>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col md={6}>
                      <h5> Team 1 Score: </h5>
                      </Col>
                      <Col md={6}>
                      <h5> Team 2 Score: </h5>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col md={6}>
                     <h5> Team 1 Overs: </h5>
                      </Col>
                      <Col md={6}>
                      <h5> Team 2 Overs: </h5>
                      </Col>
                    </Row>
                    <hr/>
                    <h5> Result: </h5>

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

export default Scoreboard;
