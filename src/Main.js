import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Specials from './Specials.js';

const Main = () => {

        return(
            <div>
                <div className="main_card">
                    <div>
                        <h2>Little Lemon</h2>
                        <p>Welcome to Little Lemon Restaurant</p>
                        <Link to={'/bookingtable'}>
                            <Button className="reserve_table">Reserve a Table</Button>
                        </Link>
                    </div>
                    <img className="main_card_img" src="main_card_img.png" alt="" />
                </div>
                <Specials/>
            </div>
        );
};

export default Main;