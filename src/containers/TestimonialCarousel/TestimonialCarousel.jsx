import React, { useState } from "react";
import "./TestimonialCarousel.style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileImg from "../../assets/images/profile-img.jpg";
import "../../assets/fontawesome-free-6.3.0-web/css/all.min.css";

const TestimonialCarousel = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  return (
    <div className="TestimonialCarousel">
      <Slider
        fade={true}
        speed={500}
        className="TestimonialCarousel__review-wrapper"
        asNavFor={nav2}
        ref={(slider) => {
          setNav1(slider);
          // setNav2(slider);
        }}
      >
        <div>
          <blockquote className="TestimonialCarousel__review">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum
            suspendisse ultrices gravida.”
          </blockquote>
        </div>
        <div>
          <blockquote className="TestimonialCarousel__review">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum
            suspendisse ultrices gravida.”
          </blockquote>
        </div>
        <div>
          <blockquote className="TestimonialCarousel__review">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum
            suspendisse ultrices gravida.”
          </blockquote>
        </div>
        <div>
          <blockquote className="TestimonialCarousel__review">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum
            suspendisse ultrices gravida.”
          </blockquote>
        </div>
        <div>
          <blockquote className="TestimonialCarousel__review">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum
            suspendisse ultrices gravida.”
          </blockquote>
        </div>
        <div>
          <blockquote className="TestimonialCarousel__review">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum
            suspendisse ultrices gravida.”
          </blockquote>
        </div>
        <div>
          <blockquote className="TestimonialCarousel__review">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum
            suspendisse ultrices gravida.”
          </blockquote>
        </div>
        <div>
          <blockquote className="TestimonialCarousel__review">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum
            suspendisse ultrices gravida.”
          </blockquote>
        </div>
      </Slider>
      <Slider
        lazyLoad={true}
        className="TestimonialCarousel__picture-wrapper center"
        infinite={true}
        centerPadding="0px"
        centerMode={true}
        asNavFor={nav1}
        ref={(slider) => {
          setNav2(slider);
        }}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        speed={500}
      >
        <img
          src={ProfileImg}
          alt="profile"
          className="TestimonialCarousel__customer-img"
        />

        <img
          src={ProfileImg}
          alt="profile"
          className="TestimonialCarousel__customer-img"
        />

        <img
          src={ProfileImg}
          alt="profile"
          className="TestimonialCarousel__customer-img"
        />

        <img
          src={ProfileImg}
          alt="profile"
          className="TestimonialCarousel__customer-img"
        />

        <img
          src={ProfileImg}
          alt="profile"
          className="TestimonialCarousel__customer-img"
        />

        <img
          src={ProfileImg}
          alt="profile"
          className="TestimonialCarousel__customer-img"
        />
        <img
          src={ProfileImg}
          alt="profile"
          className="TestimonialCarousel__customer-img"
        />
        <img
          src={ProfileImg}
          alt="profile"
          className="TestimonialCarousel__customer-img"
        />
      </Slider>
      <Slider
        fade={true}
        speed={500}
        className="TestimonialCarousel__person-wrapper"
        asNavFor={nav2}
        ref={(slider) => {
          setNav1(slider);
        }}
      >
        <div className="TestimonialCarousel__person">
          <h3 className="TestimonialCarousel__person-name">John Lucy</h3>
          <span className="TestimonialCarousel__person-job">
            CEO at Linkedin
          </span>
        </div>
        <div className="TestimonialCarousel__person">
          <h3 className="TestimonialCarousel__person-name">Sarah Taylor</h3>
          <span className="TestimonialCarousel__person-job">
            CEO at Twitter
          </span>
        </div>
        <div className="TestimonialCarousel__person">
          <h3 className="TestimonialCarousel__person-name">James Anderson</h3>
          <span className="TestimonialCarousel__person-job">
            CEO at Facebook
          </span>
        </div>
        <div className="TestimonialCarousel__person">
          <h3 className="TestimonialCarousel__person-name">Steven Smith</h3>
          <span className="TestimonialCarousel__person-job">
            CEO at EnvyTheme
          </span>
        </div>
        <div className="TestimonialCarousel__person">
          <h3 className="TestimonialCarousel__person-name">Jonus Nathan</h3>
          <span className="TestimonialCarousel__person-job">CEO at Envato</span>
        </div>
        <div className="TestimonialCarousel__person">
          <h3 className="TestimonialCarousel__person-name">Sadio Finn</h3>
          <span className="TestimonialCarousel__person-job">
            CEO at FlatIcon
          </span>
        </div>
        <div className="TestimonialCarousel__person">
          <h3 className="TestimonialCarousel__person-name">Tom Olivar</h3>
          <span className="TestimonialCarousel__person-job">
            CEO at ThemeForest
          </span>
        </div>
        <div className="TestimonialCarousel__person">
          <h3 className="TestimonialCarousel__person-name">James Finn</h3>
          <span className="TestimonialCarousel__person-job">CEO at GitLab</span>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
