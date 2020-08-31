import React, { Component } from 'react';
import '../App.css';
import { Nav, Container, Row, Col, Image } from 'react-bootstrap';


class Header extends Component {
  render () {
    return (
      <div className="Header">
        <Container>
          <Row className="Banniere">
            <Col xs={6} md={2} className="Logosection">
              <a href="/" rel="noopener noreferrer" alt="Accueil">
                <Image className="Logo" height="120" width="120" src="https://images-na.ssl-images-amazon.com/images/I/41dBPiMMgTL._AC_SX466_.jpg" rounded />
              </a>
            </Col>
            <Col xs={6} md={6}>
              <h1>L'événement sportif</h1>
              <h3>Agenda, Actus, Découverte</h3>
            </Col>
            <Col xs={6} md={4} className="Socialsection">
              <div className="SocialMedia">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" alt="Facebook"><i class='fab fa-facebook-square'>{null}</i></a>
                <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noopener noreferrer" alt="Instagram"><i class='fab fa-instagram'>{null}</i></a>
                <a href="https://www.pinterest.fr/" target="_blank" rel="noopener noreferrer" alt="Pinterest"><i class='fab fa-pinterest'>{null}</i></a>
                <a href="https://twitter.com/home?lang=fr" target="_blank" rel="noopener noreferrer" alt="Twitter"><i class='fab fa-twitter'>{null}</i></a>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="Navbar">
          <Nav className="justify-content-end Navbar">
              <Nav.Link className="LinkNav" href="/articles">Nos articles</Nav.Link>
              <Nav.Link className="LinkNav" href="/agenda">Agenda</Nav.Link>
              <Nav.Link className="LinkNav" href="/promo">Proposer / Promouvoir</Nav.Link>
              <Nav.Link className="LinkNav" href="/about">Qui sommes nous?</Nav.Link>
          </Nav>
        </div>
      </div>

    );
  }
}

export default Header;