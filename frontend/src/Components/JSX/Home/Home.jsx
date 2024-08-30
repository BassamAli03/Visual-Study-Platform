import React from "react";
import "../../CSS/Home/Home.css";
import { Link, useNavigate } from "react-router-dom";
import ChooseSection from "./ChooseSection";
import FaqAccordion from "./FaqAccordion";
import { MyNavBar } from "./Navbar";
import { Footer } from "./Footer";
import { HeroDiv } from "./HeroDiv";
import { TypewriterEffectSmoothDemo } from "./Typescriptdiv";
import { InfiniteMovingCardsDemo } from "./Infinitediv";
import { AuroraBackgroundDemo } from "./Aurorabackdiv";

export let Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <MyNavBar />
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <TypewriterEffectSmoothDemo />
          <br />
          <p>
            Embark on a collaborative learning journey with our Virtual Study
            Platform, where students converge to share knowledge, join vibrant
            communities, and forge meaningful connections. Dive into engaging
            discussions, access a wealth of resources, and enhance your academic
            experience effortlessly.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <button
              type="button"
              className="btn custom-btn btn-primary border-0 btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              onClick={() => navigate("/SignUp")}
            >
              SignUp/Login
            </button>

            <button
              type="button"
              className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              onClick={() => navigate("/ContactUs")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <div>
        <HeroDiv />
      </div>
      <div className="py-5">
        <ChooseSection />
      </div>

      <AuroraBackgroundDemo />

      <div className="py-5">
        <FaqAccordion />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">Testimonials</h2>
          <InfiniteMovingCardsDemo />
          <Link to="#">
            <button
              type="button"
              className="btn custom-btn btn-primary btn-lg mt-5 border-0"
            >
              Read More Reviews
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
