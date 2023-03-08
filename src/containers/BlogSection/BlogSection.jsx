import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { SectionTitle, PlaceholderCard } from "../../components";
import { BlogList } from "../";
import "./BlogSection.style.scss";

const BlogSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    setLoading(true);
      const fetchPost = async () => {
        try {
          let response = await axios.get(`${baseURL}posts?_limit=3`);
          setData(response.data);
          setError(null);
        } catch (error) {
          setData(null);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();

  }, []);
  return (
    <section className="BlogSection bg-light">
      <Container>
        <SectionTitle
          heading="our blog"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        {!loading && <BlogList posts={data} />}
        {loading && (
          <Spinner variant="primary" size="sm" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Container>
    </section>
  );
};

export default BlogSection;
