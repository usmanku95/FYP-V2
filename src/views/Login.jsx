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
import { login } from "../api";
import { Redirect } from "react-router-dom";
import "react-table-6/react-table.css";
import Card from "components/Card/Card.jsx";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { connect } from "react-redux";
import { toggleLogin } from "../redux/actions";
// const mapStateToProps = (state) => {
//   return { isLoggedIn: state.isLoggedIn };
// };

function mapDispatchToProps(dispatch) {
  return {
    toggleLogin: (article) => {
      console.log(article, "artivlekrl");
      dispatch(toggleLogin(article));
    },
  };
}
const ConnLogin = (props) => {
  console.log(props.isLoggedIn, "is;logingngn");

  const { register, handleSubmit, errors } = useForm();
  const [redirect, setRedirect] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    login(data).then((res) => {
      if (res.data.token) {
        props.toggleLogin(true);
        setRedirect(true);
        window.localStorage.setItem("token", res.data.token);
      } else toast.error("Wrong mail or password." || res.error);
    });
  };
  if (redirect) {
    return <Redirect to="/user/events" />;
  } else
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Card
              title="Admin Login"
              // category="Created using Roboto Font Family"
              content={
                <div style={{ marginTop: "20px" }}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid fluid>
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
                          <h6> Password: </h6>
                          <input
                            type="password"
                            name="password"
                            ref={register({
                              required: {
                                value: true,
                                message: "This field is required.",
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
};
const Login = connect(null, mapDispatchToProps)(ConnLogin);
export default Login;
