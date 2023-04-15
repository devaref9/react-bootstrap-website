import React from "react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BsArrowUp } from "react-icons/bs";
import "./ScrollToTop.style.scss";
import "animate.css";

const ScrollToTop = () => {
  const [isHover, setIsHover] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  const [showTopBtn, setShowTopBtn] = useState(null);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

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
        ${isHover && isBigScreen ? "ScrollToTop__hover" : ""}
        `}
      onClick={goToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BsArrowUp className="ScrollToTop__icon" />
    </div>
  );
};

export default ScrollToTop;
