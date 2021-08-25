import React from 'react';
import './navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <ul>
                <li className='ls'><a className="active" href="#home">Home</a></li>
                <li className='ls'><a href="#news">News</a></li>
                <li className='ls'><a href="#contact">Contact</a></li>
                <li className='ls'><a href="#about">About</a></li>
            </ul>
        </div>
    )
}

export default Navigation
