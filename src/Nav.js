import React from 'react';
// import App from './App';
import AboutLittleLemon from './AboutLittleLemon';
import MenuLittleLemon from './MenuLittleLemon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationLittleLemon from './ReservationLittleLemon';
import OrderLittleLemon from './OrderLittleLemon';
import LoginLittleLemon from './LoginLittleLemon';
import Main from './Main';
import BookingTable from './BookingTable';

const Nav = () =>{

        return(
            <div>
              <div className='navbar'>
                <a href='/home'>Home</a>
                <a href='/about'>About</a>
                <a href='/menu'>Menu</a>
                <a href="/reservations">Reservations</a>
                <a href="/order">Order Online</a>
                <a href="/login">Login</a>
              </div>
              <BrowserRouter>
                <Routes> 
                    <Route path="/home" element={<Main />}></Route>
                    <Route path="/about" element={<AboutLittleLemon />}></Route>
                    <Route path="/menu" element={<MenuLittleLemon />}></Route>
                    <Route path="/reservations" element={<ReservationLittleLemon />}></Route>
                    <Route path="/order" element={<OrderLittleLemon />}></Route>
                    <Route path="/login" element={<LoginLittleLemon />}></Route>
                    <Route path="/bookingtable" element={<BookingTable />}></Route>
                </Routes>
              </BrowserRouter>

            </div>
        );
};

export default Nav;