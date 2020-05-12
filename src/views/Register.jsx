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
import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "react-table-6/react-table.css";
import Card from "components/Card/Card.jsx";
import { useForm } from "react-hook-form";
// class Register extends Component {
//   render() {
export default function Register() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Card
            title="Register for trials"
            // category="Created using Roboto Font Family"
            content={
              <div style={{ marginTop: "20px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid fluid>
                    <Row>
                      <Col md={6}>
                        <h6> Name: </h6>
                        <input
                          type=""
                          name="name"
                          ref={register({ required: true })}
                        ></input>
                        {errors.name && (
                          <span style={{ color: "red" }}>
                            This field is required
                          </span>
                        )}
                      </Col>
                      <Col md={6}>
                        <h6> Reg. No: </h6>
                        <input
                          type=""
                          name="regNum"
                          ref={register({ required: true })}
                        ></input>
                        {errors.regNum && (
                          <span style={{ color: "red" }}>
                            This field is required
                          </span>
                        )}
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6}>
                        <h6> Email: </h6>
                        <input
                          type="email"
                          name="email"
                          required
                          ref={register({ required: true })}
                        ></input>
                        {errors.email && (
                          <span style={{ color: "red" }}>
                            This field is required
                          </span>
                        )}
                      </Col>
                      <Col md={6}>
                        <h6> Phone: </h6>
                        <input
                          type="number"
                          name="phone"
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
                        ></input>
                        {errors.phone && (
                          <span style={{ color: "red" }}>
                            {errors.phone.message}
                          </span>
                        )}
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6}>
                        <h6> Faculty: </h6>
                        <input
                          type=""
                          name="faculty"
                          ref={register({ required: true })}
                        ></input>
                        {errors.faculty && (
                          <span style={{ color: "red" }}>
                            This field is required
                          </span>
                        )}
                      </Col>
                    </Row>
                    <hr />
                    {/* <b> Result: </b> */}

                    <input className="btn btn-info btn-fill" type="submit" />
                  </Grid>
                </form>
              </div>
            }
          />
        </Row>
      </Grid>
    </div>
  );
}
