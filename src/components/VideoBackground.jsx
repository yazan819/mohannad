import React from 'react';
import '../styles/videobackground.css'

const VideoBackground = ({video}) => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add other content on top of the video background if needed */}
    </div>
  );
};

export default VideoBackground;
