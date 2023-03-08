import React from "react";
import "./SectionTitle.style.scss";

const SectionTitle = ({ heading, text }) => {
  return (
    <div className="SectionTitle">
      <h2 className="text-center SectionTitle__heading">{heading} </h2>
      <p className="text-secondary text-center SectionTitle__text m-0">{text}</p>
    </div>
  );
};

export default SectionTitle;
