import React, { useEffect } from "react";
import "../../CSS/Login/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector("#container1");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  });

  return (
    <div id="container1">
      <div id="forms-container">
        <div id="signin-signup">
          <form id="loginform" action="" class="sign-in-form">
            <h2 id="signuptitle">Sign in</h2>
            <div id="input-field">
              <FontAwesomeIcon icon={faUser} id="i" />
              <input type="text" placeholder="Username" />
            </div>
            <div id="input-field">
              <FontAwesomeIcon icon={faLock} id="i" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btnsign solid" />
            <p id="social-text">Or sign in with Social Platform</p>
            <div id="social-media">
              <a href="#" id="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" id="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </form>

          <form id="signupform" action="" class="sign-up-form">
            <h2 id="signuptitle">Sign up</h2>
            <div id="input-field">
              <FontAwesomeIcon icon={faUser} id="i" />
              <input type="text" placeholder="Username" />
            </div>
            <div id="input-field">
              <FontAwesomeIcon icon={faEnvelope} id="i" />
              <input type="email" placeholder="Email" />
            </div>
            <div id="input-field">
              <FontAwesomeIcon icon={faLock} id="i" />
              <input type="password" placeholder="Password" />
            </div>
            <div id="input-field">
              <FontAwesomeIcon icon={faLock} id="i" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <input type="submit" value="Sign up" class="btnsign solid" />
            <p id="social-text">Or sign in with Social Platform</p>
            <div id="social-media">
              <a href="#" id="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" id="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div id="panels-container">
        <div class="panel left-panel">
          <div id="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              exercitationem minus laudantium esse,
            </p>
            <button class="btnsign transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="/signup3.svg" id="image1" alt="" />
        </div>

        <div class="panel right-panel">
          <div id="content">
            <h3>One of Us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              exercitationem minus laudantium esse,
            </p>
            <button class="btnsign transparent" id="sign-in-btn">
              Login
            </button>
          </div>
          <img src="/login2.svg" id="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
