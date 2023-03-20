import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';

class Specials extends React.Component {

    render() {
        return(
            <Row className="g-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src="special1.png" width="300px" length="400px" />
                    <Card.Body>
                    <Card.Title>Special1</Card.Title>
                    <Card.Text>
                        Special dish number one!
                    </Card.Text>
                    </Card.Body>
                    <Button variant="Primary" size="lg">Order</Button>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="special2.png" width="300px" length="400px" />
                    <Card.Body>
                    <Card.Title>Special2</Card.Title>
                    <Card.Text>
                        Special dish number two!
                    </Card.Text>
                    </Card.Body>
                    <Button variant="Primary" size="lg">Order</Button>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src="special1.png" width="300px" length="400px" />
                    <Card.Body>
                    <Card.Title>Special3</Card.Title>
                    <Card.Text>
                        Special dish number three!
                    </Card.Text>
                    </Card.Body>
                    <Button variant="Primary" size="lg">Order</Button>
                </Card>
            </Col>
            </Row>
        );
    };
}

export default Specials;