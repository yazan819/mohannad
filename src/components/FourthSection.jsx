import React from "react";
import "../styles/forthsection.css";
import { IoPeopleOutline } from "react-icons/io5";
import { LuNetwork } from "react-icons/lu";
import { FaUserNurse } from "react-icons/fa";
import { HiOutlineSwatch } from "react-icons/hi2";
import { animated, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

function FourthSection() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const items = [
    {
      icon: <IoPeopleOutline />,
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia ipsam, in nam voluptates, placeat enim soluta expedita quis ipsum doloremque odio officia voluptas cumque doloribus repellat iure provident voluptatibus!",
    },
    {
      icon: <LuNetwork />,
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia ipsam, in nam voluptates, placeat enim soluta expedita quis ipsum doloremque odio officia voluptas cumque doloribus repellat iure provident voluptatibus!",
    },
    {
      icon: <FaUserNurse />,
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia ipsam, in nam voluptates, placeat enim soluta expedita quis ipsum doloremque odio officia voluptas cumque doloribus repellat iure provident voluptatibus!",
    },
    {
      icon: <HiOutlineSwatch />,
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia ipsam, in nam voluptates, placeat enim soluta expedita quis ipsum doloremque odio officia voluptas cumque doloribus repellat iure provident voluptatibus!",
    },
  ];

  const leftToRight = useTrail(2, {
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: inView ? 1 : 0, transform: inView ? "translateX(0px)" : "translateX(-50px)" },
    delay: inView ? 400 : 0, // Apply a delay only if inView is true
  });

  const rightToLeft = useTrail(2, {
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: inView ? 1 : 0, transform: inView ? "translateX(0px)" : "translateX(50px)" },
    delay: inView ? 400 : 0, // Apply a delay only if inView is true
  });

  return (
    <div ref={inViewRef} className="fouthsectionContainer">
      <div className="headtextProrofolio">
        <h1>Our Portfolio</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="ProtofolioCards">
        {leftToRight.map((props, index) => (
          <animated.div key={index} style={props} className="whatwedocard">
            <div className="iconWhatwedo">{items[index * 2].icon}</div>
            <div className="whatwedotext">
              <p>{items[index * 2].text}</p>
            </div>
          </animated.div>
        ))}
        {rightToLeft.map((props, index) => (
          <animated.div key={index} style={props} className="whatwedocard">
            <div className="iconWhatwedo">{items[index * 2 + 1].icon}</div>
            <div className="whatwedotext">
              <p>{items[index * 2 + 1].text}</p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default FourthSection;
