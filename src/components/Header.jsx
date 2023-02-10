import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Search from './Search';
import '../scss/App.scss';

function Header({ searchValue, setSearchValue }) {
  return (
    <header>
      <Navbar bg="info" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand href="/">
              <Image width={45} height={35} src="src/assets/logo.svg" />
              INFOHAVE
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar">
              <Search searchValue={searchValue} setSearchValue={setSearchValue} />
              <Nav.Link className="text-dark" href="/">Home</Nav.Link>
              <Nav.Link href="favourite">
                <Image width={20} height={20} className="header-button" src="src/assets/heart.svg" />
              </Nav.Link>
              <Nav.Link href="calendar">
                <Image width={20} height={20} className="header-button" src="src/assets/calendar.svg" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
