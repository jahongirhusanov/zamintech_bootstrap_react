import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartLink from "../components/cart/CartLink";
import LoginPage from "../screens/Login/LoginLink";
// import LoginPage from '../screens/Login/Login'

function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <i className="fas fa-handshake"></i> ZAMIN TECH
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/customers">
                <Nav.Link>Мижозлар</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>Махсулотлар</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contracts">
                <Nav.Link>Шартнома</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/settings">
                <Nav.Link>Созламалар</Nav.Link>
              </LinkContainer>
            </Nav>

            {/* ml-auto = margin-left auto */}
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <CartLink />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <LoginPage />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
