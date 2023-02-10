import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react';

function Event(props) {
  const favouriteAdd = () => {
    alert(123);
  };

  return (
    <Col>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="text-secondary">{props.title}</Card.Title>
        <Card.Text className="text-dark">
          {props.owner}
          <p className="text-success">{props.data}</p>
        </Card.Text>
        <Image width={20} height={20} onClick={favouriteAdd} src="src/assets/heart.svg" className="rounded" />
        <Button className="offset-md-4" variant="outline-info text-dark">Show more</Button>
        <Button className="offset-md-0" variant="info">Go somewhere</Button>
      </Card.Body>
    </Col>
  );
}
export default Event;
