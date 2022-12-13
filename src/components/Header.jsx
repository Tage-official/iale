import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <header>
      <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image width={40} height={35} src="src/assets/logo.svg" />
            INFOHAVE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar">
              <Nav.Link className="text-dark" href="#home">Home</Nav.Link>
              <Nav.Link href="#favourite">
                <Image width={20} height={20} src="src/assets/heart.svg" />
              </Nav.Link>
              <Nav.Link href="#calendar">
                <Image width={20} height={20} src="src/assets/calendar.svg" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
