import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

export default function NavMenu() {
  return (
    <Navbar className="nav-color">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/assets/images/raccoon512px.png" alt="" width="70px" />
        </Navbar.Brand>

        <NavLink>
          <p>Round Animal Blog</p>
        </NavLink>

        <Nav className="me-auto">
          <Nav.Link href="#home">
            <img src="/assets/images/pig512px.png" alt="" width="70px" />
          </Nav.Link>

          {/* <Nav.Link href="#features">
            <img src="/assets/images/cow512px.png" alt="" width="70px" />
            Features
          </Nav.Link>
          <Nav.Link href="#pricing">
            <img src="/assets/images/panda512px.png" alt="" width="70px" />
            Pricing
          </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}
