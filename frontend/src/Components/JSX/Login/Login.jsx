import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../../CSS/Login/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        navigate("/MainPage");
        alert("Login successful");
        
      } else {
        alert(response.status);
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });
      const responseData = await response.json();
      if (response.ok) {        
        alert("Signup successful");
        setSignupData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        const container = document.querySelector("#container1");
        container.classList.remove("sign-up-mode");
      } else {
        alert(responseData.message);
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          <form
            id="loginform"
            className="sign-in-form"
            onSubmit={handleLoginSubmit}
          >
            <h2 id="signuptitle">Sign in</h2>
            <div id="input-field">
              <FontAwesomeIcon icon={faEnvelope} id="i" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div id="input-field">
              <FontAwesomeIcon icon={faLock} id="i" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <input type="submit" value="Login" className="btnsign solid" />
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

          <form
            id="signupform"
            className="sign-up-form"
            onSubmit={handleSignupSubmit}
          >
            <h2 id="signuptitle">Sign up</h2>
            <div id="input-field">
              <FontAwesomeIcon icon={faUser} id="i" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={signupData.username}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div id="input-field">
              <FontAwesomeIcon icon={faEnvelope} id="i" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div id="input-field">
              <FontAwesomeIcon icon={faLock} id="i" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div id="input-field">
              <FontAwesomeIcon icon={faLock} id="i" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                required
              />
            </div>
            <input type="submit" value="Sign up" className="btnsign solid" />
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
        <div className="panel left-panel">
          <div id="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              exercitationem minus laudantium esse,
            </p>
            <button className="btnsign transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="/signup3.svg" id="image1" alt="" />
        </div>

        <div className="panel right-panel">
          <div id="content">
            <h3>One of Us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              exercitationem minus laudantium esse,
            </p>
            <button className="btnsign transparent" id="sign-in-btn">
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
