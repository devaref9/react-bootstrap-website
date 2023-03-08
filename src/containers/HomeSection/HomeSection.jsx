import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeSection.style.scss";
import ProductBanner from "../../assets/images/products-banner.png";
import { Btn } from "../../components";

const HomeSection = () => {
  return (
    <section className="HomeSection bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="text-center text-lg-start">
              Monitoring Your Daily Life
            </h1>
            <p className="HomeSection__text text-secondary text-center text-lg-start">
              We passion to work hard and deliver excellent results. It could
              solve the needs of your customers and develop innovation.
            </p>
            <Btn className="mx-auto mx-lg-0 mb-4 mb-lg-2">
              Buy Products
            </Btn>
          </Col>

          <Col lg={6} className="text-center text-lg-end">
            <div className="mt-3 mt-lg-0">
              <img src={ProductBanner} alt="product banner" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;
