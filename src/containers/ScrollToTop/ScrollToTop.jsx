import React from "react";
import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import "./ScrollToTop.style.scss";
import "animate.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`ScrollToTop d-flex align-items-center justify-content-center rounded-circle animate__animated
        ${showTopBtn ? "animate__fadeInUp" : "animate__fadeOutDown"}
        `}
      onClick={goToTop}
    >
      <BsArrowUp className="ScrollToTop__icon" />
    </div>
  );
};

export default ScrollToTop;
