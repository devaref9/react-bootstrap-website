import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./WhyChooseSection.style.scss";
import WhyChooseImg from "../../assets/images/why-choose.png";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import {
  FaCloudSunRain,
  FaLaptopCode,
  FaMicrochip,
  FaRegUser,
} from "react-icons/fa";

const WhyChooseSection = () => {
  return (
    <section className="WhyChooseSection">
      <Container>
        <SectionTitle
          heading="Why Choose Product"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Row className="align-items-center">
          <Col xs="12" lg="5">
            <div className="WhyChooseSection__image text-center">
              <img src={WhyChooseImg} alt="why choose" />
            </div>
          </Col>
          <Col xs="12" lg="7">
            <Row className="WhyChooseSection__content">
              <Col xs="12" lg="6" className="m-lg-0">
                <FeatureCard
                  heading="High Quality"
                  text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
                  Icon={FaCloudSunRain}
                />
              </Col>
              <Col xs="12" lg="6" className="m-lg-0 align-self-start">
                <FeatureCard
                  heading="Awesome Design"
                  text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
                  Icon={FaLaptopCode}
                />
              </Col>
              <Col xs="12" lg="6" className="m-lg-0">
                <FeatureCard
                  heading="Latest Technology"
                  text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
                  Icon={FaMicrochip}
                />
              </Col>
              <Col xs="12" lg="6" className="m-lg-0">
                <FeatureCard
                  heading="User Friendly"
                  text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
                  Icon={FaRegUser}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseSection;
