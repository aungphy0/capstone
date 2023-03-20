import React from "react";
import Button from 'react-bootstrap/Button';
import Specials from './Specials.js';

class Main extends React.Component {

    render() {
        return(
            <div>
                <div className="main_card">
                    <div>
                        <h2>Little Lemon</h2>
                        <p>Welcome to Little Lemon Restaurant</p>
                        <Button className="reserve_table">Reserve a Table</Button>
                    </div>
                    <img className="main_card_img" src="main_card_img.png" alt="" />
                </div>
                <Specials/>
            </div>
        );
    }
}

export default Main;