import './Menu.css';
import React from "react";

const MenuLittleLemon = () => {

    return (
        <>
            <div className="menu"> Menu </div>
            <div className="menu-container">

            <div className="section">

                <h3 className="meal-type">Tacos</h3>

                    <div className="item-name">

                        <div className="label">Carne Asada</div>
                        <b className="low">$10</b>
                        <div className="description"> Un taco bien perron y sabroso.</div>
                    </div>

                    <div className="item-name">
                        <div className="label">Al Pastor</div>
                        <b>$10</b>
                        <div className="description"> Un taco bien perron y sabroso.</div>
                    </div>

                    <div className="item-name">
                        <div className="label">Cabeza</div>
                        <b className="low">$10</b>
                        <div className="description">Un taco bien perron y sabroso.</div>
                    </div>

                    <div className="item-name">
                        <div className="label">Lengua</div>
                        <b>$10</b>
                        <div className="description">Un taco bien perron y sabroso.</div>
                    </div>

            </div>

            <div className="section">
                <h3 className="meal-type">Burritos</h3>

                    <div className="item-name">
                        <div className="label">Chicken</div>
                        <b>$12</b>
                        <div className="description"> Un burrito bien perron y sabroso.</div>
                    </div>

                    <div className="item-name">
                        <div className="label">Bean and Cheese</div>
                        <b>$12</b>
                        <div className="description">Un burrito bien perron y sabroso.</div>
                    </div>

                    <div className="item-name">
                        <div className="label">Veggie</div>
                        <b>$12</b>
                        <div className="description">Un burrito bien perron y sabroso.</div>
                    </div>


            </div>

            </div>
        </>
    );
};

export default MenuLittleLemon;