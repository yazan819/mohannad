import React from "react";
import "../styles/sixthSection.css";
import bruch from "../images/bruch.png";
import me from "../images/thumbnail.jpg";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.png'
import slider3 from '../images/slider3.png'
import slider4 from '../images/slider4.png'
import slider5 from '../images/slider5.png'
import slider6 from '../images/slider6.png'
import slider7 from '../images/slider7.png'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={slider1} onDragStart={handleDragStart} role="presentation" />,
  <img src={slider2} onDragStart={handleDragStart} role="presentation" />,
  <img src={slider3} onDragStart={handleDragStart} role="presentation" />,
  <img src={slider4} onDragStart={handleDragStart} role="presentation" />,
  <img src={slider5} onDragStart={handleDragStart} role="presentation" />,
  <img src={slider6} onDragStart={handleDragStart} role="presentation" />,
  <img src={slider7} onDragStart={handleDragStart} role="presentation" />,
];
function SixthSection() {
  return (
    <div className="sixthSectionContainer">
      <div className="headtextforsixsection">
        <h1>What Our Clients Says</h1>
        <img src={bruch} />
      </div>
      <div className="sliderimage">
      <AliceCarousel  mouseTracking items={items} autoPlay={true} autoPlayInterval={2000} paddingLeft={795} disableButtonsControls={true} activeIndex={3}  infinite={true}/>

      </div>
     
    </div>
  );
}

export default SixthSection;
