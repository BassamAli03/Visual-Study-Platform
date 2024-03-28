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
                className="btn footer-button btn-lg mb-5 mb-md-4"
              >
                Get In Touch
              </button>
            </Link>
            <ul className="footer-social-icons list-unstyled d-flex justify-content-between">
              <Link to="/contact">
                <li>
                  <FontAwesomeIcon icon={faFacebook} className="custom-svg" />
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <FontAwesomeIcon icon={faInstagram} className="custom-svg" />
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <FontAwesomeIcon icon={faTiktok} className="custom-svg" />
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <FontAwesomeIcon icon={faYoutube} className="custom-svg" />
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-md-7 col-lg-6 ">
            <div className="d-row d-md-flex justify-content-between align-items-center">
              <div className="col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0">
                <ul className="footer-navigation list-unstyled mb-0">
                  <Link to="/" className="text-decoration-none ">
                    <li className="text-uppercase fw-semibold footer-links">
                      Home
                    </li>
                  </Link>
                  <Link to="/auth" className="text-decoration-none ">
                    <li className="text-uppercase fw-semibold footer-links">
                      SIgnUp/Login
                    </li>
                  </Link>
                  <Link to="/about" className="text-decoration-none ">
                    <li className="text-uppercase fw-semibold footer-links">
                      About us
                    </li>
                  </Link>
                  <Link to="/blog" className="text-decoration-none ">
                    <li className="text-uppercase fw-semibold footer-links">
                      Blog
                    </li>
                  </Link>
                  <Link to="/contact" className="text-decoration-none ">
                    <li className="text-uppercase fw-semibold  footer-links">
                      Get In Touch
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <ul className="list-unstyled mb-0">
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
      <div className="">
        <div className="container" style={{ backgroundColor: "#6187bc8f" }}>
          <p className="p-3 m-0 text-center">copyright</p>
        </div>
      </div>
    </footer>
  );
};
