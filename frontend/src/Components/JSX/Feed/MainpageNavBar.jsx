import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        localStorage.removeItem("token");
        navigate("/SignUp");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <Navbar id="mainnav" expand="lg" className="position-fixed w-100 h-20">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" style={{ pointerEvents: "none" }}>
              <img src={icon} alt="Icon" className="icon-img" />
            </Link>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 gap-3">
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
            </Nav>
            <Nav className="me-auto justify-content-end  w-100 gap-3">
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
              <Dropdown id="dropdown" as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-5 h-5"
                    onClick={() => {
                      /* Add your onClick handler */
                    }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
