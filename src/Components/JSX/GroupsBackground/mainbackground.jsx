import React from "react";
import Section from "./section";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import Content from "./content";

export const GroupsPage = () => {

  
  return (
    <div className="mainback">
      <div id="nav1">
        <a href="#" id="sun">
          Join Group
        </a>
        <a href="#" id="mercury">
          Create Group
        </a>
      </div>
      <div id="container">
        <Section />
        <SectionTwo />
      </div>
      <Content />
    </div>
  );
};

export default GroupsPage;
