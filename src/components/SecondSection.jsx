import React, { useEffect, useRef, useState } from "react";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { BiMicrochip } from "react-icons/bi";
import { AiOutlineHdd } from "react-icons/ai";
import { animated, useTrail } from "@react-spring/web";
import logo from "../images/logo.webp";
import "../styles/secondsection.css";
import { useInView } from "react-intersection-observer";

function SecondSection() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5 // Adjust this threshold as needed
  }); useEffect(() => {
    console.log("inView:", inView);
  }, [inView]);

  const items = [
    {
      icon: <HiOutlineCpuChip />,
      text: "Captivating Adventures Await",
      description:
        "Embark on a journey filled with wonder and discovery. Explore hidden treasures, encounter mythical creatures",
    },
    {
      icon: <BiMicrochip />,
      text: "Captivating Adventures Await",
      description:
        "Embark on a journey filled with wonder and discovery. Explore hidden treasures, encounter mythical creatures",
    },
    {
      icon: <AiOutlineHdd />,
      text: "Captivating Adventures Await",
      description:
        "Embark on a journey filled with wonder and discovery. Explore hidden treasures, encounter mythical creatures",
    },
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: inView ? 1 : 0, transform: inView ? "translateX(0px)" : "translateX(-50px)" },
    delay: 200,
  });

  return (
    <div ref={inViewRef} className="secondSectionContainer">
      <div className="firstSecition">
        <div className="firstRow">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="secondRow">
          <h1 style={{ color: "#2C539D" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto,{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id
          </p>
        </div>
      </div>
      <div className="secndsetionTwo">
        {trail.map((props, index) => (
          <animated.div key={index} style={props} className="Cards">
            <div className="icon">
              <div className="forIcon">{items[index].icon}</div>
            </div>
            <div className="forCardText">
              <h1>{items[index].text}</h1>
              <p>{items[index].description}</p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;
