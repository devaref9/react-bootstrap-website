import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./FeatureSection.style.scss";
import {
  FaRegHeart,
  FaRegBell,
  FaWalking,
  FaBluetoothB,
  FaCloudSunRain,
  FaVideo,
  FaLaptopCode,
  FaRegUser,
} from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="FeatureSection">
      <Container>
        <SectionTitle
          heading="Product Features"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Row>
          <Col lg="3">
            <FeatureCard
              Icon={FaRegHeart}
              heading="Heart Monitor"
              text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
            />
          </Col>
          <Col lg="3">
            <FeatureCard
              Icon={FaRegBell}
              heading="Alarm Alert"
              text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
            />
          </Col>
          <Col lg="3">
            <FeatureCard
              Icon={FaWalking}
              heading="Distance Counter"
              text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
            />
          </Col>
          <Col lg="3">
            <FeatureCard
              Icon={FaBluetoothB}
              heading="Bluetooth"
              text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
            />
          </Col>
          <Col lg="3">
            <FeatureCard
              Icon={FaCloudSunRain}
              heading="Weather Update"
              text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
            />
          </Col>
          <Col lg="3">
            <FeatureCard
              Icon={FaVideo}
              heading="Video Call"
              text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
            />
          </Col>
          <Col lg="3">
            <FeatureCard
              Icon={FaLaptopCode}
              heading="Awesome Design"
              text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
            />
          </Col>
          <Col lg="3">
            <FeatureCard
              Icon={FaRegUser}
              heading="User Friendly"
              text="List one of your product's benefits here. Lorem ipsum dolor sit amet"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
