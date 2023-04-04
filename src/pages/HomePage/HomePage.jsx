import React, { useState } from "react";
import {
  NavbarTop,
  HomeSection,
  FeaturesSection,
  AboutSection,
  WhyChooseSection,
  DownloadSection,
  DemoSection,
  FaqSection,
  TestimonialSection,
  BlogSection,
  ScrollToTop,
  ContactSection,
} from "../../containers";

const HomePage = () => {
  return (
    <div>
      <NavbarTop />
      <HomeSection />
      <FeaturesSection />
      <AboutSection />
      <WhyChooseSection />
      <DownloadSection />
      <DemoSection />
      <FaqSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
