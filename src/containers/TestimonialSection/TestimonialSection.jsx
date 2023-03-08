import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { TestimonialCarousel } from "../";
import "./TestimonialSection.style.scss";

const TestimonialSection = () => {
  return (
    <section className="TestimonialSection">
      <Container>
        <SectionTitle
          heading="Customer feedback"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <TestimonialCarousel />
      </Container>
    </section>
  );
};

export default TestimonialSection;
