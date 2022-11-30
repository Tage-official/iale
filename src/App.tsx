import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.scss';

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => (
  <div>
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
    <main>
      <Container>
        <Row className="adboard">
          <p className="text-dark">_____________________________________________________________________________________________________________________________________________________________________</p>
          <Card>
            <h1 className="text-danger text-center">Main concert of this month</h1>
          </Card>
          <p className="text-dark">_____________________________________________________________________________________________________________________________________________________________________</p>
          <Col><Image src="src/assets/adboard.png" rounded fluid className="" /></Col>
          <Col>
            <h2 className="text-secondary">Tales of Belarus</h2>
            <p className="text-dark">
              Premiere of the program "Tales of Belarus", dedicated to the 35th anniversary of the founding of the team

              A colorful vocal and choreographic show based on fabulous folklore and ritual traditions of Belarus. Bright choreographic and vocal numbers reveal the daily life of the Belarusian people, their worldview and ideals.

              Expressive animated video content, unique musical crossover, special effects and professional performance. Create bright and unique images. Guests of the evening: the Belarusian State Ensemble "Pesnyary" and the winner of the show "Academy of Talents" Yevgeny Kurchich.
            </p>
            <Button variant="info" className="offset-md-10" href="">Reserve</Button>
          </Col>
        </Row>
        <p className="text-dark">_____________________________________________________________________________________________________________________________________________________________________</p>
        <Card>
          <h3 className="text-dark text-center">Other concerts in Hrodno</h3>
        </Card>
        <p className="text-dark">_____________________________________________________________________________________________________________________________________________________________________</p>
        <p />
        <Row>
          <Col>
            <Card.Img variant="top" src="src/assets/marina.png" />
            <Card.Body>
              <Card.Title className="text-secondary">Russian! National!</Card.Title>
              <Card.Text className="text-dark">
                by Marina Devyatova
                <p className="text-success offset">
                  December 12 at the Hrodno Regional Philharmonic
                </p>
              </Card.Text>
              <Image width={20} height={20} src="src/assets/heart.svg" className="rounded" />
              <Button className="offset-md-4" variant="outline-info text-dark">Show more</Button>
              <Button className="offset-md-0" variant="info">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col>
            <Card.Img variant="top" src="src/assets/saxas.png" />
            <Card.Body>
              <Card.Title className="text-secondary">Saxophone Colours</Card.Title>
              <Card.Text className="text-dark">
                by group SAXAS
                <p className="text-success">
                  December 15 at the concert Hall Hrodno
                </p>
              </Card.Text>
              <Image width={20} height={20} src="src/assets/heart.svg" className="rounded" />
              <Button className="offset-md-4" variant="outline-info text-dark">Show more</Button>
              <Button className="offset-md-0" variant="info">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col>
            <Card.Img variant="top" src="src/assets/jeka.png" />
            <Card.Body>
              <Card.Title className="text-secondary">JEKA</Card.Title>
              <Card.Text className="text-dark">
                by Evgeny Grigoriev
                <p className="text-success">
                  December 16 at the Hrodno Regional Philharmonic
                </p>
              </Card.Text>
              <Image width={20} height={20} src="src/assets/heart.svg" className="rounded" />
              <Button className="offset-md-4" variant="outline-info text-dark">Show more</Button>
              <Button className="offset-md-0" variant="info">Go somewhere</Button>
            </Card.Body>

          </Col>
        </Row>
        <p />
        <Row>
          <Col>
            <Card.Img variant="top" src="src/assets/ny.png" />
            <Card.Body>
              <Card.Title className="text-secondary">I'll be home for Christmas</Card.Title>
              <Card.Text className="text-dark">
                by Vocal Ensemble Chapel Jam
                <p className="text-success">December 27 at the Kirche</p>
              </Card.Text>
              <Image width={20} height={20} src="src/assets/heart.svg" className="rounded" />
              <Button className="offset-md-4" variant="outline-info text-dark">Show more</Button>
              <Button className="offset-md-0" variant="info">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col>
            <Card.Img variant="top" src="src/assets/oldny.png" />
            <Card.Body>
              <Card.Title className="text-secondary">Old New Year</Card.Title>
              <Card.Text className="text-dark">
                by Symphony Orchestra and Chamber Choir
                <p className="text-success">January 15 at the Drama Theater</p>
              </Card.Text>
              <Image width={20} height={20} src="src/assets/heart.svg" className="rounded" />
              <Button className="offset-md-4" variant="outline-info text-dark">Show more</Button>
              <Button className="offset-md-0" variant="info">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col>
            <Card.Img variant="top" src="src/assets/musica.png" />
            <Card.Body>
              <Card.Title className="text-secondary">Advent Music</Card.Title>
              <Card.Text className="text-dark">
                by Symphony Orchestra
                <p className="text-success">December 16 at the Kirche</p>
              </Card.Text>
              <Image width={20} height={20} src="src/assets/heart.svg" className="rounded" />
              <Button className="offset-md-4" variant="outline-info text-dark">Show more</Button>
              <Button className="offset-md-0" variant="info">Go somewhere</Button>
            </Card.Body>
          </Col>
        </Row>
        <p className="text-dark">_____________________________________________________________________________________________________________________________________________________________________</p>
      </Container>
    </main>
    <footer className="py-5 my-5 bg-dark">
      <Container className="px-4">
        <p className="text-center text-white">Copyright &copy; INFOHAVE 2022</p>
      </Container>
    </footer>
  </div>

);

export default App;
