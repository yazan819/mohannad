import React from "react";
import "../styles/Home.css";
import NaveBar from "./NaveBar";
import HeroSecion from "./HeroSecion";
import SecondSection from "./SecondSection";
import ThirdSeciton from "./ThirdSeciton";
import FourthSection from "./FourthSection";
import FivthSection from "./FivthSection";
import SixthSection from "./SixthSection";
import Footer from "./Footer";
import VideoBackground from "./VideoBackground";
import videoFile from '../images/video.mp4'; // Adjust the path to your video file

function Home() {
  return (
    <div className="HomeContainer">
      <NaveBar />
      <video autoPlay loop muted className="BackgroundVideo">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="triangle "></div>
      <HeroSecion />
      <SecondSection />
      <ThirdSeciton />
      <FourthSection />
      <FivthSection />
      <SixthSection />
      <Footer/>
    </div>
  );
}

export default Home;
