import React from 'react'
// import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './RegNavbar.css'
import logo from './logo.png';

function RegNavbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt='logo' height='50'/>
            </div>
            <div className='right'>
            <IconContext.Provider value={{color: '#fff'}} >
                <AiIcons.AiOutlineMenu className='selectIcon'/>
            </IconContext.Provider>
            </div>
        </div>
    )
}

export default RegNavbar
