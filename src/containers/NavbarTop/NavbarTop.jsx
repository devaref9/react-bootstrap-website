import React, { useState } from "react";
import { useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import SocialNav from "../SocialNav/SocialNav";
import "./NavbarTop.style.scss";
import { Link } from "react-scroll";

const NavbarTop = () => {
  const [isHidden, setIsHidden] = useState(false);

  const hideBar = () => {
    const pos = window.pageYOffset;
    pos > 120 ? setIsHidden(true) : setIsHidden(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", hideBar, { passive: true });

    return () => {
      window.removeEventListener("scroll", hideBar);
    };
  }, []);

  let classHide = isHidden ? "hide" : "";

  return (
    <Navbar className={`${classHide}`} bg="white" expand="lg">
      <Container>
        <Navbar.Brand className="p-0 m-0">Zebu</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mt-2 mb-1 my-lg-0">
            <Nav.Link className="ms-xl-0 mt-3 mt-lg-0 NavbarTop__link">
              <Link
                activeClass="active"
                smooth
                spy
                to="home"
                duration={250}
                delay={50}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="mt-3 mt-lg-0 NavbarTop__link">
              <Link
                activeClass="active"
                smooth
                spy
                to="features"
                duration={500}
                delay={1000}
              >
                Features
              </Link>
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link">
              <Link
                activeClass="active"
                smooth
                spy
                to="about"
                duration={500}
                delay={1000}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link">
              <Link
                activeClass="active"
                smooth
                spy
                to="faq"
                duration={500}
                delay={1000}
              >
                Faq
              </Link>
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link">
              <Link
                activeClass="active"
                smooth
                spy
                to="testimonial"
                duration={500}
                delay={1000}
              >
                Testimonial
              </Link>
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link">
              <Link
                activeClass="active"
                smooth
                spy
                to="blog"
                duration={500}
                delay={1000}
              >
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link">
              <Link
                activeClass="active"
                smooth
                spy
                to="contact"
                duration={500}
                delay={1000}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="mt-3 mt-lg-0">
          <SocialNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
