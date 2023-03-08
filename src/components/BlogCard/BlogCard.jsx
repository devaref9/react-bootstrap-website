import React from "react";
import { Card } from "react-bootstrap";
import CardImg from "../../assets/images/blog-img.jpg";
import WriterImg from "../../assets/images/blog-writer.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import "./BlogCard.style.scss";
import { Link } from "../../components";

const BlogCard = ({title, text}) => {
  return (
    <>
      <Card className="BlogCard">
        <Link>
          <Card.Img variant="top" src={CardImg} />
        </Link>
        <Card.Header className="d-flex justify-content-between align-items-center bg-transparent border-0">
          <div className="BlogCard__writer d-flex align-items-center">
            <img className="rounded-circle" src={WriterImg} alt="writer" />
            <span className="text-secondary">Jean Auel</span>
          </div>
          <div className="BlogCard__date d-flex align-items-center">
            <FaCalendarAlt />
            <span className="text-secondary">April 30,2021</span>
          </div>
        </Card.Header>
        <Card.Body>
          <Link className="primary">
            <Card.Title>{title}</Card.Title>
          </Link>
          <Card.Text className="text-secondary">
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
