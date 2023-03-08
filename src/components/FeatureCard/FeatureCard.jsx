import React from "react";
import "./FeatureCard.style.scss";

const FeatureCard = ({ heading, text, Icon }) => {
  return (
    <div className="FeatureCard d-flex flex-column align-items-center">
      <div className="FeatureCard__icon-wrapper">
        <Icon />
      </div>
      <h3 className="FeatureCard__title">{heading}</h3>
      <p className="FeatureCard__text text-secondary m-0 text-center">{text}</p>
    </div>
  );
};

export default FeatureCard;
