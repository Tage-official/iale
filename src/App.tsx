import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.scss';

const App: React.FC = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img width={40} height={35} src="src/assets/logo.svg" />
        INFOHAVE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar navbar-right">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#favourite">
            <img width={20} height={20} src="src/assets/heart.svg" />
          </Nav.Link>
          <Nav.Link href="#calendar">
            <img width={20} height={20} src="src/assets/calendar.svg" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default App;
