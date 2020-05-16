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
import { useEffect } from "react";
export default function UserNavbarLinks(props) {
  const [redirect, setRedirect] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  let decoded = { isAdmin: false };
  if (localStorage.getItem("token")) {
    decoded = jwtDecode(localStorage.getItem("token"));
    console.log(decoded, "decoded in user navabrlinks");

    // setIsAdmin(true);
  }
  // useEffect(() => {}, [decoded]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("log oy click");

    // setIsAdmin(false);
    console.log(props, "props in nav");
    // window.history.push("/user/login");
    // props.history.push("/user/login");
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/user/login" />;
  } else
    return (
      <div>
        <Nav pullRight>
          {decoded.isAdmin ? (
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
}
