import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import videoFile from './images/video.mp4'; // Adjust the path to your video file

import VideoBackground from "./components/VideoBackground";
function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="VideoBackground" element={<VideoBackground />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
