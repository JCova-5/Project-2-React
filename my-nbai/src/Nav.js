import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';


export default function Nav() {

    const navColor = {
        color: 'white'
    };

    return (
        <nav>
            <h4>My <span>NBAI</span></h4>
            <ul className="nav-links">
                <Link style={navColor} to="/" > 
                    <li>Home</li>
                </Link>
                <Link style={navColor} to='teamPage'>
                    <li>TeamPage</li>
                </Link>
                <Link style={navColor} to='playerPage'>
                <li>PlayerPage</li>
                </Link>
                <Link style={navColor} to='about'>
                <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}
