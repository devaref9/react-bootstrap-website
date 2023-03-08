import React from "react";
import './SocialIcon.style.scss'

const SocailIcon = ({ Element }) => {
  return (
    <a className="SocialIcon text-black" href="/">
      <Element />
    </a>
  );
};

export default SocailIcon;
