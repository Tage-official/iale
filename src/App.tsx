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
import Categories from './components/Categories.jsx';
import Event from './components/Event.jsx';
import Header from './components/Header.jsx';
// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => (
  <div>
    <Header />
    <main>
      <Categories />
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
            <p className="text-success">December 8 at the Hrodno Regional Philharmonic</p>
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
          <Event title="Russian! National!" owner="by Marina Devyatova" image="src/assets/marina.png" data="December 12 at the Hrodno Regional Philharmonic" />
          <Event title="Saxophone Colours" owner="by group SAXAS" image="src/assets/saxas.png" data="December 15 at the concert Hall Hrodno" />
          <Event title="JEKA" owner="by Evgeny Grigoriev" image="src/assets/jeka.png" data="December 16 at the Hrodno Regional Philharmonic" />
        </Row>
        <p />
        <Row>
          <Event title="I'll be home for Christmas!" owner="by Vocal Ensemble Chapel Jam" image="src/assets/ny.png" data="December 27 at the Kirche" />
          <Event title="Old New Year" owner="by Symphony Orchestra and Chamber Choir" image="src/assets/oldny.png" data="January 15 at the Drama Theater" />
          <Event title="Advent Music" owner="by Symphony Orchestra" image="src/assets/musica.png" data="December 16 at the Kirche" />
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
