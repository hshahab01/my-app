import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="bottom" src = "holder.js/100px180"/>
      <Card.Body>
        <Card.Title>Test Card</Card.Title>
        <Card.Text>
          Example of making a card using bootstrap.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardExample;