import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../../CSS/AboutUs/Aboutus.css";
import AboutusAuroraBack from "./aboutusauroraback";
import { MyNavBar } from "../Home/Navbar";


export let Aboutus = () => {
  let message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptates, sequi vel nobis tempore molestiae est nulla, repellendus eaque, autem neque a non cupiditate inventore praesentium voluptate earum rem sapiente?";
  return (
    <AboutusAuroraBack>
      <MyNavBar/>
    <section id="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 id="section-title">The Team Behind Visual Study Platform</h2>
            <p id="section-sub">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div id="team-item">
              <div className="flex justify-content-center align-items-center">
                <img
                  src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
                  id="team-img"
                  alt="Pic"
                />
              </div>

              <h3 id="mainheading">Muhammad Khizar</h3>
              <div id="team-info">
                <p id="team-infop">Head of Backend Development</p>
                <p id="team-infop">He implements stuff so good omg</p>

                <ul id="team-icon">
                  <li id="icons">
                    <a href="#" id="twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li id="icons">
                    <a href="#" id="pinterest">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                  </li>
                  <li id="icons">
                    <a href="#" id="facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li id="icons">
                    <a href="#" id="instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div id="team-item">
              <div className="flex justify-content-center align-items-center">
                <img
                  src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg"
                  id="team-img"
                  alt="Pic"
                />
              </div>
              <h3 id="mainheading">Bassam Ali</h3>
              <div id="team-info">
                <p id="team-infop">Head of FrontEnd Development</p>
                <p id="team-infop">He implements stuff so good omg</p>

                <ul id="team-icon">
                  <li id="icons">
                    <a href="#" id="twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li id="icons">
                    <a href="#" id="pinterest">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                  </li>
                  <li id="icons">
                    <a href="#" id="facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li id="icons">
                    <a href="#" id="instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div id="team-item">
              <div className="flex justify-content-center align-items-center">
                <img
                  src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg"
                  id="team-img"
                  alt="Pic"
                />
              </div>
              <h3 id="mainheading">Fatima Ahsan</h3>
              <div id="team-info">
                <p id="team-infop">Head of Creative Department</p>
                <p id="team-infop">She implements stuff so good omg</p>

                <ul id="team-icon">
                  <li id="icons">
                    <a href="#" id="twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li id="icons">
                    <a href="#" id="pinterest">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                  </li>
                  <li id="icons">
                    <a href="#" id="facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li id="icons">
                    <a href="#" id="instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </AboutusAuroraBack>
  );
};
