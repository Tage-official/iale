import { useState } from 'react';
import {
  Nav, Navbar, Container,
} from 'react-bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => (
  <div className="App">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img width={40} height={35} src="src/assets/logo.svg" />
          INFOHAVE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar navbar-right">
            <Nav.Link href="#home">Главная</Nav.Link>
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
  </div>
);

export default App;
