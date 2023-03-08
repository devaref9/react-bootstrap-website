import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./DownloadSection.style.scss";
import AppImg from "../../assets/images/app-image.png";
import GooglePlay from "../../assets/images/google-play.png";
import AppStore from "../../assets/images/app-store.png";

const DownloadSection = () => {
  return (
    <section className="DownloadSection bg-light">
      <Container>
        <Row className="align-items-center">
          <Col xs="12" lg="6">
            <div className="DownloadSection__image text-center text-lg-start">
              <img src={AppImg} alt="app" />
            </div>
          </Col>
          <Col xs="12" lg="6">
            <div className="DownloadSection__content text-center text-lg-start m-lg-0">
              <h3 className="DownloadSection__heading mb-3">
                Download Our Apps Today
              </h3>
              <p className="text-secondary">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account the system and expound the actual
                teachings of the great explore.
              </p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="DownloadSection__download d-flex justify-content-center justify-content-lg-start">
                <a href="/">
                  <img
                    className="DownloadSection__download-img"
                    src={GooglePlay}
                    alt="google play store"
                  />
                </a>
                <a href="/">
                  <img
                    className="DownloadSection__download-img"
                    src={AppStore}
                    alt="app store"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadSection;
