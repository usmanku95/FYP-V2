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
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router";
import { useState } from "react";
import { connect } from "react-redux";
import { toggleLogin } from "../../redux/actions";
//mapState receives entire state of store , it should
// return only a part of data that this component needs.

function mapDispatchToProps(dispatch) {
  return {
    toggleLogin: (article) => {
      console.log(article, "artivlekrl");
      dispatch(toggleLogin(article));
    },
  };
}
const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};
const ConnUserNavbarLinks = (props) => {
  console.log(props.isLoggedIn, "redux art");

  const [redirect, setRedirect] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  let decoded = { isAdmin: false };
  if (localStorage.getItem("token")) {
    decoded = jwtDecode(localStorage.getItem("token"));
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.toggleLogin(false);

    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  } else
    return (
      <div>
        <Nav pullRight>
          {props.isLoggedIn ? (
            <NavItem eventKey={3} onClick={handleLogout} href="/user/login">
              Log out
            </NavItem>
          ) : (
            <NavItem eventKey={3} href="#">
              Admin Log in
            </NavItem>
          )}
        </Nav>
      </div>
    );
};
const UserNavbarLinks = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnUserNavbarLinks);
export default UserNavbarLinks;
