import React from "react";
import { Col, Row } from "react-bootstrap";
import { BlogCard } from "../../components";
import "./BlogList.style.scss";

const BlogList = ({ posts }) => {
  return (
    <div className="BlogList">
      <Row className="justify-content-between">
        {posts.map((post) => {
          return (
            <Col xs={12} md={6} lg={4}>
              <BlogCard title={post.title} text={post.body} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default BlogList;
