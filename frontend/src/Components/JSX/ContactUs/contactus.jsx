import React, { useState } from "react";
import "../../CSS/ContactUs/contactus.css";
import { MyNavBar } from "../Home/Navbar";
import ContactAuroraBack from "./contactauroraback";
import axios from "axios";

export let Contactus = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const { name, email, message } = formState;
  const [buttonMessage, setButtonMessage] = useState("Send Message.");
  const [loading, setIsLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);

    setTimeout(() => {
      setIsLoading(false);
      setButtonMessage("Success!!");
      setFormState(initialForm);
    }, 1000);
  };
  const onchange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  const sendMail = () => {
    axios.get("http://localhost:4000/contactus", {
      params: {
        name,
        email,
        message,
      },
    })
    .then(()=>{
      console.log("success");
      setTimeout(() => {
        setIsLoading(false);
        setButtonMessage("Send Message.");
      });
    })
    .catch(()=>{
      console.log("failure");
    })
  };

  return (
    <ContactAuroraBack>
      <MyNavBar />
      <div className="service-top">
        <div className="maintitle">Get in Touch</div>
        <div className="sub">
          Got a question, proposal or project or want to work <br /> together on
          something? Feel free to reach out.
        </div>
        <form onSubmit={onSubmit} id="mainform">
          <div className="input-row">
            <div className="side">
              <input
                id="ifield"
                type="text"
                placeholder="What's Your Name?"
                name="name"
                required
                value={name}
                onChange={onchange}
                autocomplete="off"
              />
            </div>
            <div className="side">
              <input
                id="ifield"
                type="email"
                placeholder="What's Your Email?"
                name="email"
                required
                value={email}
                onChange={onchange}
                autocomplete="off"
              />
            </div>
          </div>
          <div className="textarea">
            <textarea
              type="textarea"
              id="tarea"
              placeholder="Hello, I think we need you to work on/collaborate this particular product... React as soon as you can."
              name="message"
              required
              value={message}
              onChange={onchange}
              autocomplete="off"
            />
          </div>
          <button id="sendbtn" type="submit" onClick={sendMail}>
            {loading ? "" : buttonMessage}
          </button>
        </form>
      </div>
    </ContactAuroraBack>
  );
};
