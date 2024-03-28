import { Link } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Dropdown, Navbar } from "react-bootstrap";
import "../../CSS/Feed/MainpageNavBar.css";
import icon from "../../../Assets/Images/icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faBell,
  faEnvelope,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export let MyNavBar = () => {
  return (
    <>
      <Navbar id="mainnav" expand="lg" className="position-fixed w-100 h-20">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              <img src={icon} alt="Icon" className="icon-img" />
            </Link>
          </Navbar.Brand>
          <Dropdown id="dropdown" as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Home</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown id="dropdown" as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Timeline</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">View Groups</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown id="dropdown" as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Account Settings</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Notification Settings
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Edit Account Information
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Privacy Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100 gap-3">
              <Nav.Link href="#" className="text-uppercase">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="w-5 h-5"
                  onClick={() => {
                    /* Add your onClick handler */
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#" className="text-uppercase">
                <FontAwesomeIcon
                  icon={faHome}
                  className="w-5 h-5"
                  onClick={() => {
                    /* Add your onClick handler */
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#" className="text-uppercase">
                <FontAwesomeIcon
                  icon={faBell}
                  className="w-5 h-5"
                  onClick={() => {
                    /* Add your onClick handler */
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#" className="text-uppercase">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-5 h-5"
                  onClick={() => {
                    /* Add your onClick handler */
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#" className="text-uppercase">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="w-5 h-5"
                  onClick={() => {
                    /* Add your onClick handler */
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#" className="text-uppercase">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-5 h-5"
                  onClick={() => {
                    /* Add your onClick handler */
                  }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
