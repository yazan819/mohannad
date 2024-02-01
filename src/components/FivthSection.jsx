import React from "react";
import bruch from "../images/bruch.png";
import "../styles/FivthSection.css";
import ornage from "../images/orange.webp";
import zain from "../images/zain.jpg";
import umniha from "../images/umniah.jpg";
import { Carousel } from "@trendyol-js/react-carousel";
import { Stepper, Step } from "react-form-stepper";

function FivthSection() {
  return (
    <div className="FivthSectionContainer">
      <div className="headtextwork">
        <h1>How we do The work</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className="slider">
          <Stepper activeStep={0}>
            <Step
              label="Children Step 1"
              style={{ background: "#F9F871", color: "red" }}
            />
            <Step
              label="Children Step 2"
              style={{ background: "#F9F871", color: "red" }}
            />
            <Step
              label="Children Step 3"
              style={{ background: "#F9F871", color: "red" }}
            />
            <Step
              label="Children Step 3"
              style={{ background: "#F9F871", color: "red" }}
            />
            <Step
              label="Children Step 3"
              style={{ background: "#F9F871", color: "red" }}
            />
          </Stepper>
        </div>
      </div>
      <div className="ourclinets">
        <div className="outclinetsText">
          <h1>Our Clinets</h1>
          <div className="brushImage">
            <img src={bruch} alt="" />
          </div>
        </div>
      </div>
      <div className="clintes">
        <div className="clintesimges">
          <div className="forclintesimage">
            <img src={ornage} alt="" />
          </div>
          <div className="forclintesimage">
            {" "}
            <img src={zain} alt="" />
          </div>
          <div className="forclintesimage">
            {" "}
            <img src={umniha} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FivthSection;
