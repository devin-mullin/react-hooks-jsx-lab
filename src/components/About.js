import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>
      About me
        <p>
          I'm a freakin developer!
        </p>
        <img src={image} alt="I made this" />
      </h2>
  </div>;
}

export default About;
