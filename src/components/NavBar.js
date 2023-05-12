import React from 'react';
import '../styles/NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <h1>Ross Aitken - Portfolio</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>
        </div>
    );
}
 
export default NavBar;