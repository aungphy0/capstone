import React from 'react';

class Nav extends React.Component{

    render() {
        return(
            <div className='navbar'>
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/menu">Menu</a>
              <a href="/reservations">Reservations</a>
              <a href="/order">Order Online</a>
              <a href="login">Login</a>
            </div>
        );
    }
}

export default Nav;