import React from "react";
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
} from "../../containers";
import ContactSection from "../../containers/ContactSection/ContactSection";

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
    </div>
  );
};

export default HomePage;
