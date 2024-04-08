import React from "react";
import Section from "./section";
import SectionTwo from "./sectionTwo";
import Content from "./content";

export const GroupsPage = () => {

  
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
