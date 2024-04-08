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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi
            debitis, et quas voluptatibus nam ex. Necessitatibus eligendi
            ratione expedita! Porro, ut.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <button
              type="button"
              className="btn custom-btn btn-primary border-0 btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              onClick={() => navigate("/Mainpage")}
            >
              SignUp/Login
            </button>

            <button
              type="button"
              className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              onClick={() => navigate("/Groupspage")}
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

      
      <AuroraBackgroundDemo/>

      <div className="py-5">
        <FaqAccordion />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">Testimonials</h2>
          <InfiniteMovingCardsDemo />
          <Link to="/blog">
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
