import { motion } from "framer-motion";
import React from "react";
import AuroraBackground from "./Auroraback";
import { Link } from "react-router-dom";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="py-5 relative text-center">
          <div className="container ">
            <div className="row d-flex align-items-center justify-content-around">
              <div className="">
                <h2 className="text-capitalize text-white">
                  Connect with other students
                </h2>
                <p className="text-white">
                  Easily connect with fellow students worldwide. Share ideas,
                  collaborate on projects, and build lasting friendships—all
                  within our vibrant virtual community.
                </p>
                <Link to="/SignUp">
                  <button
                    type="button"
                    className="btn custom-btn btn-primary border-0 btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                  >
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
