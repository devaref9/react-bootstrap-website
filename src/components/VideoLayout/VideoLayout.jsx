import React from "react";
import { CiPlay1 } from "react-icons/ci";
import RippleAnimation from "../RippleAnimation/RippleAnimation";
import "./VideoLayout.style.scss";

const VideoLayout = () => {
  return (
    <div className="VideoLayout">
      <h3 className="VideoLayout__heading">Product Demo</h3>

      <div className="VideoLayout__player-button">
        <RippleAnimation />
        <span className="VideoLayout__icon-wrapper">
          <CiPlay1 />
        </span>
      </div>
    </div>
  );
};

export default VideoLayout;
