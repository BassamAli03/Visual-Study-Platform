import React from "react";
import ThreeCard from "../Group Comps/3dcard";

const Section = () => {
  return (
    <section style={{ display: "flex", justifyContent: "flex-end" }}>
      <div className="center" id="sectionTwo">
        {/* <h1 id="grouph1">Mercury</h1>
        <p id="grouppara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga
          soluta ea, officiis accusantium eius fugit odio nisi labore sint vitae
          molestias impedit ipsa ab nulla earum maxime illo dicta.
        </p> */}
        <ThreeCard />
      </div>
    </section>
  );
};

export default Section;
