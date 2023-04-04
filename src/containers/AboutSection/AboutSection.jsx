import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutSection.style.scss";
import ProductsAbout from "../../assets/images/products-about.png";
import ProductAboutList from "../../components/ProdcutAboutList/ProductAboutList";

const AboutSection = () => {

  return (
    <section className="AboutSection" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs lg="6">
            <div className="AboutSection__content">
              <span>Watch</span>
              <h3 className="AboutSection__heading">About The Product</h3>
              <p className="text-secondary AboutSection__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ProductAboutList />
            </div>
          </Col>
          <Col xs lg="6" className="text-center text-lg-end">
            <img
              className="AboutSection__img m-lg-0"
              src={ProductsAbout}
              alt="About Product"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
