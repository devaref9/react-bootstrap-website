import React from "react";
import { Container } from "react-bootstrap";
import "./DemoSection.style.scss";
import ReactPlayer from "react-player";
import VideoLayout from "../../components/VideoLayout/VideoLayout";

const DemoSection = () => {
  const url =
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4";
  return (
    <section className="DemoSection">
      <Container>
        <ReactPlayer
          className="DemoSection__player"
          url={url}
          playing={true}
          light={<VideoLayout />}
          controls={true}
        />
      </Container>
    </section>
  );
};

export default DemoSection;
