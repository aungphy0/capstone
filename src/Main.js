import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {

    render() {
        return(
            <div>
            <Card className="main_card">
                <Card.Body>
                    <Card.Title>Little Lemon</Card.Title>
                    <Card.Text>
                        Welcome to Little Lemon Restaurant.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card.Img className="main_card_img" src="main_card_img.png" />
            </div>
        );
    }
}

export default Main;