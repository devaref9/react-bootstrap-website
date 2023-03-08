import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Link.style.scss";

const Link = ({ children, path = "/", className }) => {
  return (
    <div className={`Link ${className}`}>
      <LinkContainer to={path}>{children}</LinkContainer>
    </div>
  );
};

export default Link;
