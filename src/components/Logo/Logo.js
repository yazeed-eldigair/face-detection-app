import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import faceDetection from "./face-detection.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 42 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa4"> <img alt="logo" src={faceDetection}/> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
