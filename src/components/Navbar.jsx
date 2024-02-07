// CustomNavbar.js
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import netflixLogo from "./netflix_logo.png";
import kidsIcon from "./kids_icon.png";
import profilePage from "./One-Piece-PNG-HD-Image.png";

const CustomNavbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="mx-5">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={netflixLogo} alt="Netflix Logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tv-shows">
              TV Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/recently-added">
              Recently Added
            </Nav.Link>
            <Nav.Link as={Link} to="/my-list">
              My List
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/search">
              <i className="bi bi-search" style={{ color: "#fff" }}></i>
            </Nav.Link>
            <Nav.Link href="#" className="text-light mx-3">
              <img src={kidsIcon} width="30" height="30" alt="Kids" />
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  src={profilePage}
                  alt="User Avatar"
                  width="30"
                  height="30"
                />
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/sign-out">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
