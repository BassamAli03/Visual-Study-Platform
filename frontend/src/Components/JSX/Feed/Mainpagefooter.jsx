import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/Feed/Mainpagefooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export let MainPageFooter = () => {
  return (
    <footer className="footer" id="footer1">
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-4">
            <Link to="/contact">
              <button
                type="button"
                id="ContactBtn"
                className="btn btn-lg mb-5 mb-md-4 border-white"
              >
                Get In Touch
              </button>
            </Link>
            <ul className="footer-social-icons list-unstyled d-flex justify-content-between">
              <Link to="/contact">
                <li>
                  <FontAwesomeIcon icon={faFacebook} id="custom-svg" />
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <FontAwesomeIcon icon={faInstagram} id="custom-svg" />
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <FontAwesomeIcon icon={faTiktok} id="custom-svg" />
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <FontAwesomeIcon icon={faYoutube} id="custom-svg" />
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-md-7 col-lg-6 ">
            <div className="d-row d-md-flex justify-content-between align-items-center">
              <div className="col-12 col-md-6 col-lg-3 mb-5 mt-4 my-md-0">
                <ul className="footer-navigation list-unstyled mb-0">
                  <Link to="/" className="text-decoration-none ">
                    <li id="link1" className="text-uppercase fw-semibold">
                      Home
                    </li>
                  </Link>
                  <Link to="/auth" className="text-decoration-none ">
                    <li id="link1" className="text-uppercase fw-semibold">
                      SIgnUp/Login
                    </li>
                  </Link>
                  <Link to="/about" className="text-decoration-none ">
                    <li id="link1" className="text-uppercase fw-semibold">
                      About us
                    </li>
                  </Link>
                  <Link to="/blog" className="text-decoration-none ">
                    <li id="link1" className="text-uppercase fw-semibold">
                      Blog
                    </li>
                  </Link>
                  <Link to="/contact" className="text-decoration-none ">
                    <li id="link1" className="text-uppercase fw-semibold ">
                      Get In Touch
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <ul className="list-unstyled mb-0 text-white">
                  <li>
                    <p>Main Address - </p>
                  </li>
                  <li>
                    <p>Phone Number - </p>
                  </li>
                  <li>
                    <p>Email - </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="p-3 m-0 border-t-2 text-center text-white">copyright</p>
      </div>
    </footer>
  );
};
