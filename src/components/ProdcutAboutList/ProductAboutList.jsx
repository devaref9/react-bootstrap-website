import React from "react";
import "./ProductAboutList.style.scss";
import { FaRegCheckSquare } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";

const ProductAboutList = () => {
  return (
    <ListGroup className="ProductAboutList" as="ul">
      <ListGroup.Item className="d-flex align-items-center text-secondary ProductAboutList__item">
        <FaRegCheckSquare />
        Wireless Connection Headphones
      </ListGroup.Item>
      <ListGroup.Item className="d-flex align-items-center text-secondary ProductAboutList__item">
        <FaRegCheckSquare />
        Wireless freedom with Bluetooth
      </ListGroup.Item>
      <ListGroup.Item className="d-flex align-items-center text-secondary ProductAboutList__item">
        <FaRegCheckSquare />
        Install App with Unlimited Features
      </ListGroup.Item>
      <ListGroup.Item className="d-flex align-items-center text-secondary ProductAboutList__item">
        <FaRegCheckSquare />
        High Quality Product
      </ListGroup.Item>
      <ListGroup.Item className="d-flex align-items-center text-secondary ProductAboutList__item">
        <FaRegCheckSquare />
        Attractive Interface with Many Options
      </ListGroup.Item>
      <ListGroup.Item className="d-flex align-items-center text-secondary ProductAboutList__item">
        <FaRegCheckSquare />
        Multiple Color Available
      </ListGroup.Item>
      <ListGroup.Item className="d-flex align-items-center text-secondary ProductAboutList__item">
        <FaRegCheckSquare />
        Live Chat and Instant Notification
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ProductAboutList;
