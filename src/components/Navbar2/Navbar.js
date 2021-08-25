import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css';
import './styleVars.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(0); 
    const extendSidebar = () => setSidebar(1);
    const retractSidebar = () => setSidebar(0);
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <div className='left' onMouseOver={extendSidebar}>
                        <ul className='nav-menu-items'>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                    </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>


                    <div className={sidebar ? 'right right_active' : 'right right_inactive'} onMouseOut={retractSidebar}>
                    <ul className='nav-menu-items_right'>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName+'_right'}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items'  onMouseOver={extendSidebar} onMouseOut={retractSidebar} >
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                        <span className={sidebar ? 'invisible' : 'not-invisible' }>{item.title}</span>
                                </Link>
                                </li>
                            );
                        })}

                        </ul>
                    </nav> */}
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
