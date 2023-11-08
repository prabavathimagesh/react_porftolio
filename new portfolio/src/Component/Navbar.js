import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

export default function Navbar1() {
  return (
    <main className="Navbar__header sticky-top">
      <Navbar expand="lg" className="containernavbar bg-dark">
        <Container>
          <Navbar.Brand href="#AboutPage" className="hearder__left">
            Portfo<span>lio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#AboutPage" className="homeNavbar">
                About
              </Nav.Link>
              <Nav.Link href="#SkillPage" className="homeNavbar">
                Skill
              </Nav.Link>
              <Nav.Link href="#Educations" className="homeNavbar">
                Education
              </Nav.Link>
              <Nav.Link href="#Certificateds" className="homeNavbar">
                Certification
              </Nav.Link>
              <Nav.Link href="#ContactsPage" className="homeNavbar">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </main>
  );
}
