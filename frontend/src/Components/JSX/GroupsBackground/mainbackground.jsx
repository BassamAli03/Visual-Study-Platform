import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Section from "./section";
import SectionTwo from "./sectionTwo";
import Content from "./content";

export const GroupsPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/SignUp");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="mainback">
      <div id="container">
        <Section />
        <SectionTwo />
      </div>
      <Content />
    </div>
  );
};

export default GroupsPage;
