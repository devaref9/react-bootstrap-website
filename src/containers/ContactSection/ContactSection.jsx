import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { SectionTitle } from "../../components";
import "./ContactSection.style.scss";
import ContactImg from "../../assets/images/book-contact.png";

import { Btn } from "../../components";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="ContactSection">
      <Container>
        <SectionTitle
          heading="get in touch with us"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Row>
          <Col xs={12} lg={6}>
            <img
              className="ContactSection__img"
              src={ContactImg}
              alt="contact"
            />
          </Col>
          <Col xs={12} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} lg={6}>
                  <Form.Group className="input-group">
                    <Form.Control
                      className="input-control"
                      type="text"
                      placeholder="Your Name"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} lg={6}>
                  <Form.Group className="input-group">
                    <Form.Control
                      className="input-control"
                      type="email"
                      placeholder="Your Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="input-group">
                <Form.Control
                  className="input-control"
                  type="text"
                  placeholder="Your Phone"
                />
              </Form.Group>
              <Form.Group className="input-group">
                <Form.Control
                  className="input-control"
                  type="text"
                  placeholder="Your Subject"
                />
              </Form.Group>
              <Form.Group className="input-group">
                <textarea
                  className="input-control"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </Form.Group>
              <Btn type="submit">Send Message</Btn>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
