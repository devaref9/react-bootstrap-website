import React, { useState } from "react";
import { useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import SocialNav from "../SocialNav/SocialNav";
import "./NavbarTop.style.scss";

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
        <Navbar.Brand className="p-0 m-0" href="#home">
          Zebu
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mt-2 mb-1 my-lg-0">
            <Nav.Link
              className="ms-xl-0 mt-3 mt-lg-0 NavbarTop__link"
              href="#action1"
            >
              Home
            </Nav.Link>
            <Nav.Link className="mt-3 mt-lg-0 NavbarTop__link" href="#action2">
              Features
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link" href="#action2">
              About
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link" href="#action2">
              Product
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link" href="#action2">
              Faq
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link" href="#action2">
              Testimonial
            </Nav.Link>
            <Nav.Link className=" mt-3 mt-lg-0 NavbarTop__link" href="#action2">
              Contact
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
