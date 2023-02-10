import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Mainevent(props) {
  return (
    <div>
      <Col><Image width={600} height={400} src={props.image} /></Col>
      <Col>
        <h2 className="text-secondary">{props.title}</h2>
        <p className="text-dark">
          {props.info}
        </p>
        <p className="text-success">{props.data}</p>
        <Button variant="info" className="offset-md-10" href={props.address}>Reserve</Button>
      </Col>
    </div>
  );
}

export default Mainevent;
