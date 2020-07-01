import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


export default function Nav() {
    return (
        <nav>
            <h3>My NBAI</h3>
            <ul className="nav-links">
                <Link to="/" > 
                    <li>Home</li>
                </Link>
                <Link to='teamPage'>
                    <li>TeamPage</li>
                </Link>
                <Link to='playerPage'>
                <li>PlayerPage</li>
                </Link>
                <Link to='about'>
                <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}
