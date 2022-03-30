import React from "react";
import './FaceDetection.css'

const FaceDetection = ({ imageURL, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id='inputImage' alt="" src={imageURL} width='500px' height='auto' />
        <div className='bounding-box' style={{top: box.topRow+60, right: box.rightCol, bottom: box.botRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
};

export default FaceDetection;
