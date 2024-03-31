import React from "react";
import "../../CSS/Home/Home.css";
import { Link, useNavigate } from "react-router-dom";
import ChooseSection from "./ChooseSection";
import FaqAccordion from "./FaqAccordion";
import { Card } from "react-bootstrap";
import { MyNavBar } from "./Navbar";
import { Footer } from "./Footer";
const blogs = [
  {
    id: 1,
    img: ["Blog1Img"],
    title: "Blog 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 2,
    img: ["Blog2Img"],
    title: "Blog 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 3,
    img: ["Blog3Img"],
    title: "Blog 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
];

export let Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <MyNavBar />
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">Virtual Study Platform</h1>
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

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">Connect with other students</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, placeat.
              </p>
              <Link to="/auth">
                <button
                  type="button"
                  className="btn custom-btn btn-primary border-0 btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Join Now
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={"StartCoursesImg"} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">
            Latest on the blog
          </h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button
              type="button"
              className="btn custom-btn btn-primary btn-lg mt-5 border-0"
            >
              Read More Blogs
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
