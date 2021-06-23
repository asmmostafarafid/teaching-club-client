import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Nav.Link as={Link} to={"/"} style={{ fontSize: "1.5rem" }}>
          Teaching Solution
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to={"/dashboard"}>
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to={"/admin"}>
              Admin
            </Nav.Link>

            <Nav.Link as={Link} to={"/deals"}>
              Deals
            </Nav.Link>
            <Nav.Link as={Link} to={"/login"}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
