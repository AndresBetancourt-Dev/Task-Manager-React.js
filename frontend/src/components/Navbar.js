import React from "react";
import { Container, Nav, Navbar as Navigation, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import TaskIcon from "../assets/images/portapapeles.png";

const Navbar = () => {
  return (
    <Container fluid className="Navbar">
      <Container>
        <Navigation className="margin-right">
          <Link to="/" className="Navbar-brand text-light">
            <img
              alt=""
              src={TaskIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span> Tasks</span>
          </Link>
          <Nav className="ml-auto">
            <NavItem>
              <Link to="/create">
                <img
                  alt=""
                  src={TaskIcon}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />
              </Link>
            </NavItem>
          </Nav>
        </Navigation>
      </Container>
    </Container>
  );
};

export default Navbar;
