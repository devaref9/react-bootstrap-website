import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import PlaceholderImg from "../../assets/images/blog-img.jpg";

const PlaceholderCard = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={PlaceholderImg} />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} />
            <Placeholder xs={4} /> <Placeholder xs={6} />
            <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    </>
  );
};

export default PlaceholderCard;
